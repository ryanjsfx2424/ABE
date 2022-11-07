import { useState } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react'
import { 
	ChakraProvider,
	Spinner,
} from "@chakra-ui/react";

export default function Hero() {
  const [buttonIsDisabled, setButtonIsDisabled] = useState(false)

  var {data: session} = useSession()

  return (
    <ChakraProvider>
        <div className='  max-w-2xl sm:px-6   px-4 text-center    mx-auto  font-body    lg:max-w-4xl lg:px-12  '>
          <h1 className='font-extrabold capitalize text-4xl md:text-2xl lg:text-6xl text-white py-4'>
            Always be early to NFT projects
          </h1>

                {!session &&
                  <button className="rounded-xl py-2 px-4 text-xl my-4 border border-white border-opacity-20 text-center text-white bg-gradient-to-t  from-gr1 via-gr2 to-gr3 hover:bg-white-600 transition duration-75" 
                    style={{marginTop:"10vh"}}
                    disabled={buttonIsDisabled}
                    onClick={() => {
                      setButtonIsDisabled(true)
                      signIn('discord')}}>Login with Discord</button>
                }
                {!session && buttonIsDisabled && <Spinner color="#fff" emptyColor="lightgrey" />}
        </div>
    </ChakraProvider>
  );
}
