import Link from 'next/link';
import Image from 'next/dist/client/image';

export default function Section2() {
  return (
    <div className=' py-24     '>
      <div className='  text-lg lg:text-xl     items-center   gap-y-16 mx-auto lg:max-w-7xl max-w-2xl py-24 sm:px-6    '>
        <div className='grid  grid-cols-1 lg:grid-cols-2'>
          <div className='text-white   '>
            <h1 className='text-center  text-transparent bg-clip-text bg-gradient-to-r from-cblue2 via-cblue2 to-gray-100  mb-8  lg:text-left font-extrabold lg:text-6xl  md:text-5xl text-4xl   '>
              How does it work?
            </h1>
            <p className='text-center lg:text-left'>
              First found by our AI engine, then hand curated by our Senior
              Analysts before being classified and published through our API.
            </p>
            <p className='text-center lg:text-left'>
              You can choose to subscribe to our services and consume our data
              lake in a variety of options
            </p>
            <p className='text-center lg:text-left'>
              The main offerings are listed below.
            </p>
          </div>
          <img src='./How it work@2x.png' className='w-96 h-auto  mx-auto' />
        </div>{' '}
        <h1 className='  mt-48 text-transparent bg-clip-text bg-gradient-to-r from-cblue2 via-cblue2 to-gray-100  mb-8  text-center lg:text-left font-extrabold  lg:text-6xl  md:text-5xl text-4xl   '>
          Why ABE?
        </h1>
        <div className='grid text-white text-center grid-cols-1 lg:grid-cols-3'>
          <div className='grid gap-8 '>
            <img src='./Efficient@2x.png' className='h-32 w-auto mx-auto' />
            <p className=' text-3xl text-transparent bg-clip-text bg-gradient-to-r from-cblue2 via-cblue2 to-gray-100   font-extrabold    '>
              Efficient
            </p>
            <p className=''>
              ABE saves you hundreds of hours in research efforts.
            </p>
          </div>
          <div className='grid gap-8 '>
            <img src='./Easy to use@2x.png' className='h-32 w-auto mx-auto' />
            <p className=' text-3xl text-transparent bg-clip-text bg-gradient-to-r from-cblue2 via-cblue2 to-gray-100   font-extrabold    '>
              Easy to Use
            </p>
            <p className=''>
              Easy to setup, easy to use, reliable partner support.{' '}
            </p>
          </div>
          <div className='grid gap-8 '>
            <img src='./Customizeable@2x.png' className='h-32 w-auto mx-auto' />
            <p className=' text-3xl text-transparent bg-clip-text bg-gradient-to-r from-cblue2 via-cblue2 to-gray-100   font-extrabold    '>
              Customizable
            </p>
            <p className=''>
              Fully customizable by size, rating, influential followers count,
              and more!{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
