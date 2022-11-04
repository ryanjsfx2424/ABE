import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Header from '../../components/Header';
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

        setGuildChannels(abe_guild_data_db.channels)
        setGuildRoles(abe_guild_data_db.roles)

        let availableFeedsLocal = Array.from(Object.keys(abe_guild_data_db.feeds_to_channels))
        setAvailableFeeds(availableFeedsLocal)
        
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
                        <div className='  max-w-2xl sm:px-6   px-4 text-center    mx-auto  font-body    lg:max-w-4xl lg:px-12 mb-8 '
                        >
                            <h1 className='font-extrabold capitalize text-4xl md:text-7xl lg:text-5xl mb-8'>
                                Always be early to NFT projects
                            </h1>


                            <Flex direction="column">
                                <h1 className='text-xl'>Guild Id: {guild_id}</h1>
                                <h1 className='text-xl'>{guild_name}</h1>

                                {/* <Link href="/" width={38}>
                                    <a>
                                        <Image
                                            src={abePfp}
                                            alt="abe pfp"
                                            width={38}
                                            height={38}
                                        />
                                    </a>
                                </Link> */}
                            </Flex>
                            
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
                        </div>
                </ChakraProvider>
            </div>
        )
    }
}