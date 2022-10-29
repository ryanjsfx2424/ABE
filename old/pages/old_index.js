import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useSession, signIn, signOut } from 'next-auth/react'
import { Flex, ChakraProvider } from '@chakra-ui/react'
import GuildCard from '../components/GuildCard'
import Login from '../components/Login'

let devMode = false;

// This was the redirect URI before...
//http://localhost:3000/api/auth/callback/discord

export default function Subscribe() {
    var {data: session} = useSession()

    console.log("session9: ", session)
  
    if (!session) {
      return (
        <Login />
      )
    } else {
        const {user, accessToken, guildsArr: guilds, userData} = session
        
        console.log("35guilds: ", guilds)
        console.log("36 userData: ", userData)
      
        if (!accessToken) {
            console.log("No Access Token");
        }

        return (
          <div className={styles.container}>
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
              
              {guilds.map((guild) => (<GuildCard guild={guild} />))}
            </main>
          </div>
        )
    } 
}
