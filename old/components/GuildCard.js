import Image from 'next/image'
import Link from 'next/link'
import { Flex, ChakraProvider } from '@chakra-ui/react'

export default function GuildCard(props) {
    let guild = props.guild;
    let abe_guild_data_db = props.abe_guild_data_db;
    console.log("11 GuildCard abe_guild_data_db: ", abe_guild_data_db)

    let subscribed = false
    let botInGuild = false
    let channels = []
    let feeds_to_channels = {
        "alpha-plus": "Add Channel", 
        "alpha": "Add Channel",
        "solana": "Add Channel",
        "daos": "Add Channel",
        "nft-tools": "Add Channel"
    }
    
    for (var ii = 0; ii < abe_guild_data_db.length; ii++) {
        if (Number(abe_guild_data_db[ii]["guild_id"]) === Number(guild.id)) {
            if (abe_guild_data_db[ii].hasOwnProperty("subscribed") && abe_guild_data_db[ii]["subscribed"] === true) {
                subscribed = true
            }
            if (abe_guild_data_db[ii].hasOwnProperty("in") && abe_guild_data_db[ii]["in"] === true) {
                botInGuild = true
            }
            if (abe_guild_data_db[ii].hasOwnProperty("channels")) {
                channels = abe_guild_data_db[ii]["channels"]
            }
            if (abe_guild_data_db[ii].hasOwnProperty("subscribed_channel_feed_map") && abe_guild_data_db[ii]["subscribed_channel_feed_map"]) {
                for (const [key, value] of Object.entries(abe_guild_data_db[ii]["subscribed_channel_feed_map"])) {
                    if (key in feeds_to_channels) {
                        feeds_to_channels[key] = value
                    }
                }
            }
        }
    }

    const ABE_INVITE_LINK = "https://discord.com/oauth2/authorize?client_id=1014177171008409660&permissions=19456&scope=bot";

    return (
        <ChakraProvider>
            <br />
            <div style={{backgroundColor:"navy", width:300, marginLeft:250, paddingTop:10, paddingBottom:10, color:"white"}}>
                <Image 
                        src={'https://cdn.discordapp.com/icons/' + guild.id + "/" + guild.icon + '.jpg'}
                        alt={guild.name + ' PFP'}
                        width={38}
                        height={38}
                        style={{borderRadius: '50%'}}
                />

                <Flex direction="column">
                    <h3>{guild.name}</h3>

                        {!subscribed &&
                            <Link href={'/subscribe/' + String(guild.name).toLowerCase() + '/' + guild.id}>Subscribe</Link>
                        }
                        {subscribed && !botInGuild &&
                            <a href={ABE_INVITE_LINK + "&guild_id=" + guild.id}>Add</a> 
                        }
                        {subscribed && botInGuild &&
                            <Link href={{
                                pathname: '/settings/' + guild.id,
                                query: {
                                    guild_name: guild.name,
                                    channels: JSON.stringify(channels),
                                    feeds_to_channels: JSON.stringify(feeds_to_channels)
                                }
                            }}>Settings</Link>
                        }
                </Flex>
            </div>
        </ChakraProvider>
    )
}