import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useSession, signIn, signOut } from 'next-auth/react'
import GuildCard from '../components/GuildCard'
import Login from '../components/Login'
import Header from '../components/Header';
import MainContent from '../components/MainContent';
import clientPromise from '../lib/mongodb'
const allowlistedDiscordIds = ["855616810525917215", // TheLunaLabs
                               "885916945126400070", // cryptophrank
                               "303484525533462528", // tarzan.smol
                               "387362554801815555", // jayson#0001
                               "390841699657580544", // heeya.eth#75082
                               "727170084141006861", // Susano#3885
                               "1022625786299158549", // Awhales#5509
                               "864950896579313664", // khaleel#8408
                               "885916945126400070", // cryptophrank
                               "805545385799712821", // carter.eth
                               "903135744300830761", // qntm - og labz
                               "853450196015775754", // og labz; qntm #5000
                               "393226437856854019", // kanto labs
                               "917761508006559834", // ? 2022-11-09 7p CET
                               "748078908003450961", // ? 2022-11-10 9p CET
                               "755510557452402796", // ? 2022-11-11 00:39a CET
                               "843211296404930580", // 0xsun; added 2022-11-11 9:17 CET
                               "147733347009953792", // cryptogorilla; added 2022-11-11 14:00 PST
                               "586537611464540161", // safz alpha gems; added 2022-11-11 14:00 PST
                               "553181792102907935", // frosty the gym club; added 2022-11-13 20:45 PST
                               "755510557452402796", // added asked by tarzan; added 2022-11-14 20:45 PST
                               "732387893196226660", // obi-wan dinobi; added 2022-11-13 17:48 CET
                               //"904305352990933003", // JB
                              ] // main, JB

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
        console.log("allowlistedDiscordIds: ", allowlistedDiscordIds)
        console.log("userData.id: ", userData.id)
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
                    <MainContent />
                    <div className='  max-w-2xl sm:px-6   px-4 text-center    mx-auto  font-body    lg:max-w-4xl lg:px-12 mb-8 '
                      >
                  
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
