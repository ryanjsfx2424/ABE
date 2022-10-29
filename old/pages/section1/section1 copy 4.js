import styles from '../section1/section1.module.css';
import Link from 'next/link';
import Image from 'next/dist/client/image';

export default function Section1() {
  return (
    <div className='mx-auto lg:max-w-screen-2xl  py-24	  text-lg  items-center   gap-y-16  sm:px-6     '>
      <h1 className=' md:mt-64 mt-auto lg:mt-64 max-w-2xl px-6 lg:text-6xl  md:text-5xl text-4xl text-transparent bg-clip-text bg-gradient-to-r from-cblue2 via-cblue2 to-gray-100  mb-8  text-center lg:text-left  font-extrabold    lg:max-w-full lg:px-8 '>
        Top Discoveries
      </h1>
      <div className='mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
        <h2 className='text-2xl font-bold tracking-tight text-gray-900'>
          Customers also purchased
        </h2>

        <div className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8'>
          <div className='group bg-gradient-to-b from-cblue1 via-cblue2 to-cblue2 rounded-2xl  relative'>
            <div className='min-h-80  aspect-w-1 aspect-h-1 w-auto overflow-hidden        group-hover:opacity-75 lg:aspect-none lg:h-96'>
              <img
                src='/2.png'
                className='h-full w-full object-cover p-2 object-center lg:h-full lg:w-full'
              />
              <img
                src='/a.png'
                className='h-64 w-full absolute bottom-0 lg:bottom-5 object-contain p-2 object-center lg:h-80 lg:w-full'
              />
            </div>
            <div className='mt-4 p-4 flex text-white justify-between'>
              <div>
                <h3 className='text-sm'>
                  <a>
                    <span aria-hidden='true' className='absolute inset-0' />
                    Goblintown
                  </a>
                </h3>
                <p className='mt-1 text-sm'>ss </p>
              </div>
              <p className='text-sm font-medium '>
                {' '}
                7.64 ETH <br></br> All Time High
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
