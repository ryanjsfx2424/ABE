import NextAuth from 'next-auth'
import DiscordProvider from 'next-auth/providers/discord'

// https://discord.com/developers/docs/topics/oauth2#shared-resources-oauth2-scopes
//const scopes = ['identify', 'guilds'].join(' ')
const scopes = 'identify guilds'
const devMode = true

// NOTE: it is NOT possible to get guild channels from Oauth2 -- has to be done from a bot.

async function avoidRateLimit() {
  await sleep()
}

function sleep(ms = 1000) {
  return new Promise((res) => setTimeout(res, ms))
}

async function getUserData(token) {
  await avoidRateLimit()
  const fetch_result = await fetch("https://discord.com/api/users/@me", {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
  console.log("14 fetch_result: ", fetch_result)
  const data = await fetch_result.json()
  console.log("16 data: ", data)
  return data
}

async function getGuildData(token) {
  await avoidRateLimit()
  const fetch_result = await fetch('https://discord.com/api/users/@me/guilds', {
        headers: {
        authorization: `Bearer ${token}`,
      },
    })
  console.log("26 fetch_result: ", fetch_result)
  const data = await fetch_result.json()
  console.log("28 data: ", data)
  return data
}

export default NextAuth({
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
      authorization: {params: {scope: scopes}},
    }
    ),
  ],
  secret: process.env.NEXT_PUBLIC_SECRET,
  callbacks: {
    async jwt({ token, account }) {
      // Persist the OAuth access_token and or the user id to the token right after signin

      if (account) {
        token.accessToken = account.access_token
      }
      return token
    },
    async session({ session, token }) {

      if (!devMode) {
          session.accessToken = token.accessToken
          const userData = await getUserData(session.accessToken)
          console.log("userData55: ", userData)
          session.userData = userData
    
          const guildData = await getGuildData(session.accessToken)
    
          console.log("guildData59: ", guildData)
          session.guilds = guildData

      } else {
        var adminPerm = 2147483647
        var adminPermNew = '4398046511103'
        var manageServerPerm = 104189537
        var manageServerPermNew = '1071698529889'
        var session = {
          accessToken: process.env.NEXT_PUBLIC_discordAccessTokenDevMode,
          expires: "2022-11-05T08:58:07.626Z",
                    user: 
                      {
                        image: "https://cdn.discordapp.com/embed/avatars/2.png",
                        name: "JeremyBearimy"
                      },
                    userData: 
                      {
                        discriminator: "2207",
                        id: "904305352990933003",
                        username: "JeremyBearimy"
                      },
                    guilds:
                    {
                      0: 
                        {
                          icon: "719eedf706beb3fd201de80499edd278",
                          id: "789032594456576001",
                          name: "interactions.py",
                          owner: true,
                          permissions: 104713921,
                          permissions_new: "968619839169"
                        },
                      1:
                        {
                          icon: "084dd12134f3c21b9a82acbb814b1fe8",
                          id: "931482273440751638",
                          name: "ToTheMoonsNFT",
                          owner: false,
                          permissions: manageServerPerm,
                          permissions_new: manageServerPermNew
                        },
                      2:
                        {
                          icon: "9832210ac7bd13033037b865b1622c68",
                          id: "993961827799158925",
                          name: "Roo Tech",
                          owner: true,
                          permissions: 104189504,
                          permissions_new: "1071698529856"
                        }
                    }
                  }
      }
      session.guildsArr = Object.values(session.guilds).filter((guild) => (true))//(guild.owner || guild.permissions & 0x8 || guild.permissions & 0x20)))
      session.guildIdToNameMap = {}
      for (var ii = 0; ii < session.guildsArr.length; ii++) {
        session.guildIdToNameMap[session.guildsArr[ii].id] = session.guildsArr[ii].name
      }

      return session
    }
  }
})
