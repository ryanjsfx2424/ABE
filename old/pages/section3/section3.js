export default function Section3() {
  return (
    <div className=' py-24     '>
      <div className='max-w-2xl mx-auto  px-4  mx-auto lg:max-w-7xl max-w-2xl py-24 sm:px-6    text-lg lg:text-xl  items-center   gap-y-16    '>
        <h1 className='  text-transparent bg-clip-text bg-gradient-to-r from-cblue2 via-cblue2 to-gray-100  mb-8  text-center lg:text-left font-extrabold lg:text-6xl  md:text-5xl text-4xl    '>
          Choose Your Plan
        </h1>

        <div className='grid h-full font-medium gap-8 lg:grid-cols-3 grid-cols-1'>
          <div className=' rounded-xl py-6  border border-white border-opacity-20 text-center text-white bg-gradient-to-t  from-gr1 via-gr2 to-gr3  '>
            <p className='text-3xl font-extrabold'>Basic</p>

            <div className=' 	text-left p-4 grid grid-rows gap-y-8'>
              <p>
                &#10003; Daily growth recap of all ETH projects monitored in the
                last 24 hours (Limited for the daily recap
              </p>
              <p>
                &#10003; Instant notification of Top Tier Alpha Plus ETH
                Projects
              </p>
            </div>
          </div>{' '}
          <div className='lg:hidden block rounded-xl py-2 text-xl my-4 border border-white border-opacity-20 text-center text-white bg-gradient-to-t  from-gr1 via-gr2 to-gr3  '>
            $100
            <p>usd/month</p>
          </div>
          <div className=' rounded-xl  py-6 border border-white border-opacity-20 text-center text-white bg-gradient-to-br  from-cblue2 via-cblue2 to-blue-500  '>
            <div className='flex text-center mx-auto  align-middle justify-center items-center  justify-items-center'>
              <img src='./star.png' className='w-4 h-auto my-auto' />
              <p className='text-3xl font-extrabold'>&nbsp; Standard </p>
            </div>

            <div className=' text-left p-4 grid grid-rows gap-y-8'>
              <p>
                &#10003; In depth daily growth recap of all ETH projects
                monitored in the last 24 hours (&access to Solana)
              </p>
              <p>
                &#10003; Instant notification of Top Tier Alpha Plus ETH
                Projects
              </p>
              <p>
                &#10003; Ability to choose from multiple categories to embed.
              </p>
              <p>
                &#10003; Fully customizable embeds (colors, metrics, print outs,
                pingable roles...)
              </p>
            </div>
          </div>{' '}
          <div className=' lg:hidden block rounded-xl text-2xl font-bold py-2 my-4 border border-white border-opacity-20 text-center text-white bg-gradient-to-br  from-cblue2 via-cblue2 to-blue-500   '>
            $250
            <p>usd/month</p>
          </div>
          <div className=' rounded-xl py-6  border border-white border-opacity-20 text-center text-white bg-gradient-to-t  from-gr1 via-gr2 to-gr3  '>
            <p className='text-3xl font-extrabold'>Premium</p>

            <div className=' text-left p-4 grid grid-rows gap-y-8'>
              <p>
                &#10003; Daily growth recap of all ETH projects monitored in the
                last 24 hours (Limited for the daily recap
              </p>
              <p>
                &#10003; Instant notification of Top Tier Alpha Plus ETH
                Projects
              </p>
              <p>
                &#10003; Ability to choose from multiple categories to embed.
              </p>
              <p>
                &#10003; Fully customizable embeds (colors, metrics, print outs,
                pingable roles...)
              </p>
              <p>
                &#10003; Ability to select the criteria and metrics, prior to
                embedding (follower count, following..)
              </p>
              <p>
                &#10003; Ability to add the following categories to embed
                (Tools, DAOS and all new categories)
              </p>
            </div>
          </div>{' '}
          <div className='lg:hidden block rounded-xl py-2 text-xl my-4 border border-white border-opacity-20 text-center text-white bg-gradient-to-t  from-gr1 via-gr2 to-gr3  '>
            $300
            <p>usd/month</p>
          </div>
        </div>

        <div className=' grid lg:grid-cols-3 gap-8 grid-cols-1 '>
          <div className=' lg:block hidden  rounded-xl py-2 text-xl my-4 border border-white border-opacity-20 text-center text-white bg-gradient-to-t  from-gr1 via-gr2 to-gr3  '>
            $100
            <p>usd/month</p>
          </div>
          <div className=' lg:block hidden  rounded-xl text-2xl font-bold py-2 my-4 border border-white border-opacity-20 text-center text-white bg-gradient-to-br  from-cblue2 via-cblue2 to-blue-500   '>
            $250
            <p>usd/month</p>
          </div>
          <div className=' lg:block hidden  rounded-xl py-2 text-xl my-4 border border-white border-opacity-20 text-center text-white bg-gradient-to-t  from-gr1 via-gr2 to-gr3  '>
            $300
            <p>usd/month</p>
          </div>
        </div>
        <p className='text-xl text-center font-light text-white'>
          Note: Prices above based on a month to month subscription. Discounts
          apply for 3 months, 6 months and 12 months pre-paid plans. Get in
          touch to find out more!
        </p>
      </div>
    </div>
  );
}
