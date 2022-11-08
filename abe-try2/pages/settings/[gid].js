import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Header from '../../components/Header'
import MainContent from '../../components/MainContent'
import Login from '../../components/Login'
import { useSession, signOut } from 'next-auth/react'
import {
    ChakraProvider,
    Flex,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
  } from '@chakra-ui/react'

const ABE_INVITE_LINK = "https://discord.com/api/oauth2/authorize?client_id=1014177171008409660&permissions=183296&scope=bot";

export async function getServerSideProps(context) {
    return {
        props: {
            guild_id: context.query.gid,
            guild_name: context.query.guild_name
        }
    }
}

export default function Settings({guild_id, guild_name}) {
    console.log("settings guild_id: ", guild_id)
    console.log("settings guild_name: ", guild_name)

    // const [availableFeeds, setAvailableFeeds] = useState(["alpha-plus",
    //     "alpha",
    //     "solana",
    //     "daos",
    //     "nft-tools"])
    // const [publishedChannels, setPublishedChannels] = useState(["Add Channel","Add Channel","Add Channel","Add Channel","Add Channel",])
    // const [publishedRoles, setPublishedRoles] = useState(["Add Role","Add Role","Add Role","Add Role","Add Role"])
    const [availableFeeds, setAvailableFeeds] = useState([])
    const [publishedChannels, setPublishedChannels] = useState([])
    const [publishedRoles, setPublishedRoles] = useState([])
    const [guildRoles, setGuildRoles] = useState([])
    const [guildChannels, setGuildChannels] = useState([])
    const [botInGuild, setBotInGuild] = useState(false)

    let abe_guild_data_db
    useEffect(() => {
        asyncEffect()
    }, [publishedChannels,publishedRoles])

    const asyncEffect = async() => {
        let response = await fetch("/api/abe-guilds-data?guild_id=" + String(guild_id), {
            method: "GET",
        })
        abe_guild_data_db = await response.json()
        console.log("abe_guild_data_db: ", abe_guild_data_db)
        console.log("abe_guild_data_db.channels: ", abe_guild_data_db.channels)
        console.log("abe_guild_data_db.roles: ", abe_guild_data_db.roles)
        console.log("abe_guild_data_db.feeds_to_channels: ", abe_guild_data_db.feeds_to_channels)

        if (abe_guild_data_db.hasOwnProperty("in") && abe_guild_data_db["in"] === true) {
            setBotInGuild(true)
        }

        if (abe_guild_data_db.channels !== null) {
            setGuildChannels(abe_guild_data_db.channels)
        }
        if (abe_guild_data_db.channels !== null) {
            setGuildRoles(abe_guild_data_db.roles)
        }

        let availableFeedsLocal = Array.from(Object.keys(abe_guild_data_db.feeds_to_channels))
        if (availableFeedsLocal !== null) {
            setAvailableFeeds(availableFeedsLocal)
        }
        
        if (String(publishedChannels) === String([])) {
            let publishedChannelsLocal = []
            let publishedRolesLocal = []

            availableFeedsLocal.forEach(function(key){
                publishedChannelsLocal.push(abe_guild_data_db.feeds_to_channels[key])
                publishedRolesLocal.push(abe_guild_data_db.feeds_to_roles[key])
            });

            setPublishedChannels(publishedChannelsLocal)
            setPublishedRoles(publishedRolesLocal)
        }
    }    

    const menuItemChannelHandler = async (guildChannel, availableFeed) => {
        let ind = availableFeeds.indexOf(availableFeed)

        let publishedChannelsLocal = publishedChannels.slice(0)
        publishedChannelsLocal[ind] = guildChannel
        setPublishedChannels(publishedChannelsLocal)
        
        await fetch("/api/abe-guilds-data", {
            method: "PATCH",
            body: JSON.stringify({
              "guild_id": guild_id,
              "subscribing_channel": guildChannel,
              "subscribing_feed": availableFeed,
              "time_updated": Date()})
          })
    }

    const menuItemRoleHandler = async (guildRole, availableFeed) => {
        let ind = availableFeeds.indexOf(availableFeed)

        let publishedRolesLocal = publishedRoles.slice(0)
        publishedRolesLocal[ind] = guildRole
        setPublishedRoles(publishedRolesLocal)
        
        await fetch("/api/abe-guilds-data", {
            method: "PATCH",
            body: JSON.stringify({
              "guild_id": guild_id,
              "subscribing_role": guildRole,
              "subscribing_feed": availableFeed,
              "time_updated": Date()})
          })
    }

    var {data: session} = useSession()

    if (!session) {
        return (
          <Login />
        )
      } else {
        var {user, accessToken, guilds: guildsObj, guildsArr: guilds, userData, guildIdToNameMap} = session
  
        return (
            <div className=' bg-gradient-to-b   font-body  from-cblue2 via-cblue2 to-cblue2 pt-16 ' style={{height:"100vh"}}>
                <ChakraProvider>
                    <Head>
                        <title>ABE2</title>
                        <meta name="description" content="Always Be Early (ABE) by Ei Labs" />
                        <link rel="icon" href="/favicon.ico" />
                    </Head>
                        <Header />
                        <MainContent />
                        <div className='  max-w-2xl sm:px-6   px-4 text-center    mx-auto  font-body    lg:max-w-4xl lg:px-12 mb-8 '
                        >
                            <Flex direction="column">
                                <h1 className='text-xl text-white'>Guild Id: {guild_id}</h1>
                                <h1 className='text-xl text-white'>{guild_name}</h1>
                            </Flex>
                            
                            {botInGuild ?

                                <>
                                    <Flex direction="row" justifyContent="center" className="  mx-auto text-white pt-8 text-xl">
                                        <Flex direction="column" className='  mx-4 bg-cdark px-4 '>
                                            <h1>Available Feeds</h1>
                                            {availableFeeds.map((availableFeed) => (
                                                <h1 key={availableFeed+"a"} className="text-align-left" style={{textAlign:"left"}}>{availableFeed}</h1>
                                            ))}
                                        </Flex>

                                        <Flex direction="column" className='mx-4 bg-cdark px-4'>
                                            <h1>Channel to publish in</h1>
                                            {availableFeeds.map((availableFeed) => (
                                                <Menu key={availableFeed+"b"}>
                                                    <MenuButton>
                                                        {publishedChannels[availableFeeds.indexOf(availableFeed)]}
                                                    </MenuButton>
                                                    <MenuList className='text-dark'>
                                                        {guildChannels.map((guildChannel) => (
                                                            <MenuItem key={guildChannel+"c"} className='text-dark' style={{color:"navy"}} 
                                                                onClick={() => {menuItemChannelHandler(guildChannel, availableFeed)}}>
                                                                    
                                                                    {guildChannel}
                                                            </MenuItem>
                                                        ))}
                                                    </MenuList>
                                                </Menu>
                                            ))}
                                        </Flex>

                                        <Flex direction="column" className='mx-4 bg-cdark px-4'>
                                            <h1>Role to notify</h1>
                                            {availableFeeds.map((availableFeed) => (
                                                <Menu key={availableFeed+"d"}>
                                                    <MenuButton >
                                                    {console.log("221 publishedChannels: ", publishedChannels)}
                                                        {publishedRoles[availableFeeds.indexOf(availableFeed)]}
                                                    </MenuButton>
                                                    <MenuList className='  py-4  '>
                                                        {guildRoles.map((guildRole) => (
                                                            <MenuItem key={guildRole+"e"} className=' py-4 ' style={{color:"navy"}}
                                                                onClick={() => {menuItemRoleHandler(guildRole, availableFeed)}}>
                                                                {guildRole}
                                                            </MenuItem>
                                                        ))}
                                                    </MenuList>
                                                </Menu>
                                            ))}
                                        </Flex>

                                    </Flex>
                                    <Flex direction="column">
                                        <h1 className='text-xl text-white py-4' style={{textAlign: "left"}}>Note: if you cannot see the channel you want, make sure the bot has the following permissions in that channel: <br />(1) view channel, <br />(2) send messages, <br />(3) embed links, <br />(4) attach files, <br />(5) mention everyone, here, and all roles.</h1>
                                    </Flex>
                                </>
                            :
                            <>
                                <h1 className="text-xl text-white py-6">We did not see ABE in your server - please try adding ABE again.</h1>
                                <a href={ABE_INVITE_LINK + "&guild_id=" + guild_id} className="rounded-xl py-2 px-4 text-xl my-4 border border-white border-opacity-20 text-center text-white bg-gradient-to-t  from-gr1 via-gr2 to-gr3 hover:bg-white-600 transition duration-75"
                                >
                                Add
                                </a> 

                            </>
                            }
                        </div>
                </ChakraProvider>
            </div>
        )
    }
}