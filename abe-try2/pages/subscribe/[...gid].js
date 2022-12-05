import { useRouter } from 'next/router'
import { useSession, signOut } from 'next-auth/react'
import clientPromise from '../../lib/mongodb'
import Subscribe from '../../components/Subscribe'
import Login from '../../components/Login'

export async function getServerSideProps() {
    try {
        const client = await clientPromise
        const db = client.db("abe")
        const collection = db.collection("abe-guilds-data")
    
        const abe_guild_data_db = await collection.find().toArray()

        const channels = await db
            .collection("abe-guild-channels")
            .find({"guild_id":123})
            .toArray();

        let url = "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BTC,USD,EUR"
        const response = await fetch(url, {
            method: "GET",
            mode: 'no-cors',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json'
            },
            referrerPolicy: 'no-referrer'
        })
        const resp_json = await response.json()
        
        return {
            props: { channels: JSON.parse(JSON.stringify(channels)), conversions: resp_json,
                     abe_guild_data_db: JSON.parse(JSON.stringify(abe_guild_data_db)) 
                    },
        }
    } catch (e) {
        console.error(e);
    }
    return {
        props: { isConnected: false }
      }
}

export default function Settings({channels, conversions, abe_guild_data_db}) {
    var {data: session} = useSession()

    const router = useRouter()
    let { gid } = router.query
    let guildName

    // console.log("session9: ", session)
    // console.log("isConnected: ", isConnected)
    // console.log("44 index abe_guild_data_db: ", abe_guild_data_db)

    if (!session) {
      return (
        <Login />
      )
    } else {
        const {user, accessToken, guildsArr: guilds, userData} = session
        // console.log("allowlistedDiscordIds: ", allowlistedDiscordIds)
        console.log("userData.id: ", userData.id)
        const userid = userData.id;
        
        let subscribed = false
        if (router.query && router.query !== {}) {
            guildName = gid[0]
            gid = gid[1]

            for (var ii = 0; ii < abe_guild_data_db.length; ii++) {
                if (Number(abe_guild_data_db[ii]["guild_id"]) === Number(gid)) {
                    if (abe_guild_data_db[ii].hasOwnProperty("subscribed") && abe_guild_data_db[ii]["subscribed"] === true) {
                        subscribed = true
                    }
                }
            }
            // gid = "123"

        } else {
            guildName = "tothemoonsnft"
            gid = "931482273440751638"
        }

        return (
            <Subscribe conversions={conversions} abe_guild_data_db={abe_guild_data_db} guild_id={gid} guild_name={guildName} subscribed={subscribed} userid={userid}/>
        )
    }
}