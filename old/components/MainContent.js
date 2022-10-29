import { useSession, signIn, signOut } from 'next-auth/react'

export default function Hero() {
  return (
    <div className='  max-w-2xl sm:px-6   px-4 text-center    mx-auto  font-body    lg:max-w-4xl lg:px-12  '
    style={{height:"86vh",width:"100vw"}}>
      <h1 className='font-extrabold capitalize text-4xl md:text-7xl lg:text-8xl'>
        Always be early to NFT projects
      </h1>

            <button onClick={() => signIn('discord')}
                    className="bg-discord-white text-xl px-5 py-3 rounded-md font-bold flex items-center space-x-4 hover:bg-gray-600 transition duration-75"
                    style={{backgroundColor: "black", marginTop:100, marginLeft:"15vw"}}>
                <i className="fa-brands fa-discord text-2xl text-light"></i>
                <span className="text-light" style={{color:"white"}}>Login with Discord</span>
            </button>
    </div>
  );
}
