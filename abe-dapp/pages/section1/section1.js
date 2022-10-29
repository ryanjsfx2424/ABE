import styles from '../section1/section1.module.css';
import Link from 'next/link';
import Image from 'next/dist/client/image';

export default function Section1() {
  return (
    <div className='mx-auto lg:max-w-7xl max-w-2xl py-24 sm:px-6  	  text-lg  items-center   gap-y-16     '>
      <h1 className=' md:mt-64 mt-auto lg:mt-64 max-w-2xl px-6 lg:text-6xl  md:text-5xl text-4xl text-transparent bg-clip-text bg-gradient-to-r from-cblue2 via-cblue2 to-gray-100  mb-8  text-center lg:text-left  font-extrabold    lg:max-w-full lg:px-8 '>
        Top Discoveries
      </h1>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
        <div className='relative '>
          <div className='relative pb-24 w-full  rounded-lg  bg-gradient-to-b from-cblue1 via-cblue2 to-cblue2  '>
            <img src='/2.png' className='p-2 mb-8' />

            <div className='absolute bottom-0 left-0 right-0 px-4 py-2 '>
              <img
                src='/goblintown@2x.png'
                className='absolute bottom-16 left-0 mx-auto h-64 w-auto right-0 px-4 py-2 '
              />

              <div className=' text-sm lg:text-xl p-2  absolute bottom-0 left-0 right-0  text-white font-bold'>
                <p className='flex    justify-between'>
                  Goblintown
                  <span>
                    7.64 ETH <br></br> All Time High
                  </span>
                </p>
                <div className='     my-2 text-sm text-white'>
                  <p>Goblintown was disovered at 8 followers.</p>
                  <p>It has now over 121K followers.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='relative '>
          <div className='relative pb-24 w-full  rounded-lg  bg-gradient-to-b from-cblue1 via-cblue2 to-cblue2  '>
            <img src='/2.png' className='p-2 mb-8' />

            <div className='absolute bottom-0 left-0 right-0 px-4 py-2 '>
              <img
                src='/goblintown@2x.png'
                className='absolute bottom-16 left-0 mx-auto h-64 w-auto right-0 px-4 py-2 '
              />

              <div className=' text-sm lg:text-xl p-2  absolute bottom-0 left-0 right-0  text-white font-bold'>
                <p className='flex    justify-between'>
                  Goblintown
                  <span>
                    7.64 ETH <br></br> All Time High
                  </span>
                </p>
                <div className='     my-2 text-sm text-white'>
                  <p>Goblintown was disovered at 8 followers.</p>
                  <p>It has now over 121K followers.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='relative '>
          <div className='relative pb-24 w-full  rounded-lg  bg-gradient-to-b from-cblue1 via-cblue2 to-cblue2  '>
            <img src='/2.png' className='p-2 mb-8' />

            <div className='absolute bottom-0 left-0 right-0 px-4 py-2 '>
              <img
                src='/goblintown@2x.png'
                className='absolute bottom-16 left-0 mx-auto h-64 w-auto right-0 px-4 py-2 '
              />

              <div className=' text-sm lg:text-xl p-2  absolute bottom-0 left-0 right-0  text-white font-bold'>
                <p className='flex    justify-between'>
                  Goblintown
                  <span>
                    7.64 ETH <br></br> All Time High
                  </span>
                </p>
                <div className='     my-2 text-sm text-white'>
                  <p>Goblintown was disovered at 8 followers.</p>
                  <p>It has now over 121K followers.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8 '>
        <div className='relative '>
          <div className='relative pb-24 w-full  rounded-lg  bg-gradient-to-b from-cblue1 via-cblue2 to-cblue2  '>
            <img src='/2.png' className='p-2 mb-8' />

            <div className='absolute bottom-0 left-0 right-0 px-4 py-2 '>
              <img
                src='/goblintown@2x.png'
                className='absolute bottom-16 left-0 mx-auto h-64 w-auto right-0 px-4 py-2 '
              />

              <div className=' text-sm lg:text-xl p-2  absolute bottom-0 left-0 right-0  text-white font-bold'>
                <p className='flex    justify-between'>
                  Goblintown
                  <span>
                    7.64 ETH <br></br> All Time High
                  </span>
                </p>
                <div className='     my-2 text-sm text-white'>
                  <p>Goblintown was disovered at 8 followers.</p>
                  <p>It has now over 121K followers.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='relative '>
          <div className='relative pb-24 w-full  rounded-lg  bg-gradient-to-b from-cblue1 via-cblue2 to-cblue2  '>
            <img src='/2.png' className='p-2 mb-8' />

            <div className='absolute bottom-0 left-0 right-0 px-4 py-2 '>
              <img
                src='/goblintown@2x.png'
                className='absolute bottom-16 left-0 mx-auto h-64 w-auto right-0 px-4 py-2 '
              />

              <div className=' text-sm lg:text-xl p-2  absolute bottom-0 left-0 right-0  text-white font-bold'>
                <p className='flex    justify-between'>
                  Goblintown
                  <span>
                    7.64 ETH <br></br> All Time High
                  </span>
                </p>
                <div className='     my-2 text-sm text-white'>
                  <p>Goblintown was disovered at 8 followers.</p>
                  <p>It has now over 121K followers.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
