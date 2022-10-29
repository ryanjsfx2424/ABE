import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useSession, signIn, signOut } from 'next-auth/react'
import GuildCard from '../components/GuildCard'
import Login from '../components/Login'
import Header from '../components/Header';
import clientPromise from '../lib/mongodb'
const allowlistedDiscordIds = ["855616810525917215", "904305352990933003"]

export async function getServerSideProps(context) {
  try {
    const client = await clientPromise
    const db = client.db("abe")
    const collection = db.collection("abe-guilds-data")

    const abe_guild_data_db = await collection.find().toArray()

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
      props: { isConnected: true, abe_guild_data_db: JSON.parse(JSON.stringify(abe_guild_data_db)), 
               conversions: resp_json },
    }
  } catch (e) {
    console.error(e)
  } 

  return {
    props: { isConnected: false }
  }
}

export default function Dashboard({
  isConnected, abe_guild_data_db, conversions,
}) {
    var {data: session} = useSession()

    // console.log("session9: ", session)
    // console.log("isConnected: ", isConnected)
    // console.log("44 index abe_guild_data_db: ", abe_guild_data_db)

    if (!session) {
      return (
        <Login />
      )
    } else {
        const {user, accessToken, guildsArr: guilds, userData} = session
        if (allowlistedDiscordIds.includes(userData.id)) {
              
              console.log("35guilds: ", guilds)
              console.log("36 userData: ", userData)
            
              if (!accessToken) {
                  console.log("No Access Token");
                  return (
                    <h1>No Access Token, Error</h1>
                  )
              }

              return (
              <div className=' bg-gradient-to-b   font-body  from-cblue2 via-cblue2 to-cblue2 pt-16' style={{height:"100vh"}}>
                  <Head>
                    <title>ABE2</title>
                    <meta name="description" content="Always Be Early (ABE) by Ei Labs" />
                    <link rel="icon" href="/favicon.ico" />
                  </Head>
            
                    <Header />
                    <div className='  max-w-2xl sm:px-6   px-4 text-center    mx-auto  font-body    lg:max-w-4xl lg:px-12 mb-8 '
                      >
                      <h1 className='font-extrabold capitalize text-4xl md:text-7xl lg:text-6xl'>
                        Always be early to NFT projects
                      </h1>
                  
                      <h3 style={{marginTop:20}}>
                        You are logged in!
                      </h3>
                      {user?.image && (
                        <Image
                          src={user.image}
                          alt="Logged in user's discord pfp."
                          width={38}
                          height={38}
                          style={{borderRadius: '50%'}}
                          />
                      )}
                      <h3>Hello, {user?.name}#{userData.discriminator}</h3>
                      <button className="rounded-xl py-2 px-4 text-xl my-4 border border-white border-opacity-20 text-center text-white bg-gradient-to-t  from-gr1 via-gr2 to-gr3" 
                        onClick={() => signOut()}>Sign Out</button>
                      
                      {console.log("89 index: abe_guild_data_db: ", abe_guild_data_db)}
                      {guilds.map((guild) => (<GuildCard key={guild} guild={guild} abe_guild_data_db={abe_guild_data_db} conversions={conversions} />))}
                    </div>
                  </div>
              )
        } else {
            return (
                <div className={styles.container}>
                    <Head>
                        <title>ABE2</title>
                        <meta name="description" content="Always Be Early (ABE) by Ei Labs" />
                        <link rel="icon" href="/favicon.ico" />
                    </Head>
              
                    <main className={styles.main}>
                        <h1 className={styles.title}>
                            This discord id is not allowlisted.
                        </h1>
                    </main>
                </div>
            )
        } 
    }
}
