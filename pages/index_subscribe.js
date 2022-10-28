import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useSession, signIn, signOut } from 'next-auth/react'
import { Flex, ChakraProvider } from '@chakra-ui/react'
import GuildCard from '../components/GuildCard'
import Login from '../components/Login'
import clientPromise from '../lib/mongodb'
import Section3b from './section3/section3b';
const allowlistedDiscordIds = ["855616810525917215", "904305352990933003"]

// subscribe page!

let devMode = false;

// This was the redirect URI before...
//http://localhost:3000/api/auth/callback/discord

export async function getServerSideProps(context) {
  try {
    await clientPromise
    // `await clientPromise` will use the default database passed in the MONGODB_URI
    // However you can use another database (e.g. myDatabase) by replacing the `await clientPromise` with the following code:
    //
    // `const client = await clientPromise`
    // `const db = client.db("myDatabase")`
    //
    // Then you can execute queries against your database like so:
    // db.find({}) or any of the MongoDB Node Driver commands

    let url = "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BTC,USD,EUR"
    console.log("url: ", url)
    const response = await fetch(url, {
      method: "GET",
      mode: 'no-cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json'
      },
      referrerPolicy: 'no-referrer'
    })
    console.log("response: ", response)
    const resp_json = await response.json()
    console.log("resp_json: ", resp_json)

    return {
      props: { isConnected: true, conversions: resp_json },
    }
  } catch (e) {
    console.error(e)
  } return {
    props: { isConnected: false }
  }
}

export default function Home({
  isConnected, conversions
}) {
    var {data: session} = useSession()

    console.log("session9: ", session)
    console.log("isConnected: ", isConnected)
    console.log("conversions: ", conversions)

    if (!session) {
      return (
        <Login />
      )
    } else {
        const {user, accessToken, guildsArr: guilds, userData} = session
        
        console.log("35guilds: ", guilds)
        console.log("36 userData: ", userData)
        console.log("37 user: ", user)
      
        if (!accessToken) {
            console.log("No Access Token");
        }

        if (allowlistedDiscordIds.includes(userData.id)) {
          return (
            <div className='font-body'>
              <Head>
                <title>ABE2</title>
                <meta name="description" content="Always Be Early (ABE) by Ei Labs" />
                <link rel="icon" href="/favicon.ico" />
              </Head>
        
              <main className={styles.main}>
                <h1 className={styles.title}>
                  Always Be Early (ABE) by Ei Labs2
                </h1>
                <h3>
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
                Hello, {user?.name}#{userData.discriminator} <br />
                <button onClick={() => signOut()}>Sign Out</button>
              </main>
              <Section3b className='relative'
                conversions={conversions} />
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
