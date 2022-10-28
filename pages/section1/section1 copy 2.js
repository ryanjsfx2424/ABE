import styles from '../section1/section1.module.css';
import Link from 'next/link';
import Image from 'next/dist/client/image';

export default function Section1() {
  return (
    <div className='max-w-2xl py-24 mx-auto  px-4 text-lg  items-center   gap-y-16  sm:px-6   lg:max-w-full lg:px-56  '>
      <h1 className=' md:mt-64 mt-auto lg:mt-64 max-w-2xl px-6 lg:text-6xl  md:text-5xl text-4xl text-transparent bg-clip-text bg-gradient-to-r from-cblue2 via-cblue2 to-gray-100  mb-8  text-center lg:text-left  font-extrabold    lg:max-w-full lg:px-8 '>
        Top Discoveries
      </h1>
      <div className='max-w-2xl mx-auto text-center px-4 grid items-center gap-x-8  grid-cols-1 gap-y-16  sm:px-6    lg:max-w-full lg:px-18 lg:grid-cols-3'>
        <div className=' font-bold  sm:h-auto h-128 lg:h-128 w-96  relative rounded-2xl overflow-hidden shadow-md     bg-gradient-to-b from-cblue1 via-cblue2 to-cblue2 mx-auto'>
          <img className='relative p-2' src='/2.png' />

          <img
            className='absolute top-[80px] left-0 right-0 mx-auto w-[200px] h-auto'
            src='/goblintown@2x.png'
          />
          <div className='h-auto p-4 relative  text-white'>
            <div className='flex justify-between'>
              <p>Goblintown</p>

              <p>
                7.64 ETH <br></br> All Time High
              </p>
            </div>
            <div className='mt-2 text-justify text-sm'>
              <p>Goblintown was disovered at 8 followers.</p>
              <p>It has now over 121K followers.</p>
            </div>
          </div>
        </div>
        <div className=' font-bold  h-auto lg;h-128 relative rounded-2xl overflow-hidden shadow-md  w-full    bg-gradient-to-b from-cblue1 via-cblue2 to-cblue2 mx-0'>
          <img className='max-w-full h-auto rounded-2xl p-2' src='/2.png' />
          <img
            className='w-auto 2xl:h-[240px]  xl:h-[200px]  lg:h-[160px] md:[h-100px] md:top-24 lg:top-36  left-0 mx-auto right-0 z-10 absolute '
            src='/goblintown@2x.png'
          />

          <div className='h-auto p-4 relative  text-white'>
            <div className='flex justify-between'>
              <p>Goblintown</p>

              <p>
                7.64 ETH <br></br> All Time High
              </p>
            </div>
            <div className='mt-2 text-justify text-sm'>
              <p>Goblintown was disovered at 8 followers.</p>
              <p>It has now over 121K followers.</p>
            </div>
          </div>
        </div>
        <div className=' font-bold  h-auto lg;h-128 relative rounded-2xl overflow-hidden shadow-md  w-full    bg-gradient-to-b from-cblue1 via-cblue2 to-cblue2 mx-0'>
          <img className='max-w-full h-auto rounded-2xl p-2' src='/3.png' />
          <img
            className='w-auto h-2/4 top-28  left-0 mx-auto right-0 z-10 absolute '
            src='/project Atama@2x.png'
          />
          <div className='h-auto p-4  text-white'>
            <div className='flex justify-between'>
              <p>Project Atama</p>

              <p>
                1.7 ETH <br></br> All Time High
              </p>
            </div>
            <div className='mt-2 text-justify text-sm'>
              <p>Goblintown was disovered at 633 followers.</p>
              <p>It has now over 43K followers.</p>
            </div>
          </div>
        </div>{' '}
        <div className=' font-bold relative  h-auto lg;h-128 rounded-2xl overflow-hidden shadow-md  w-full    bg-gradient-to-b from-cblue1 via-cblue2 to-cblue2 mx-0'>
          <img className='max-w-full h-auto rounded-2xl p-2' src='/5.png' />
          <img
            className='w-auto h-2/4 top-36   left-0 mx-auto right-0 z-10 absolute '
            src='/Memeland@2x.png'
          />
          <div className='h-auto p-4  text-white'>
            <div className='flex justify-between'>
              <p>Memeland</p>

              <p>
                1.74 ETH <br></br> All Time High
              </p>
            </div>
            <div className='mt-2 text-justify text-sm'>
              <p>Goblintown was disovered at 662 followers.</p>
              <p>It has now over 420K followers.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='max-w-2xl mx-auto text-center px-4 grid items-center gap-x-8  grid-cols-1 gap-y-16  sm:px-6  my-8 lg:max-w-6xl lg:px-8 lg:grid-cols-2'>
        <div className=' font-bold relative rounded-2xl overflow-hidden shadow-md  w-full    bg-gradient-to-b from-cblue1 via-cblue2 to-cblue2 mx-0'>
          <img className='max-w-full h-auto rounded-2xl p-2' src='/6.png' />
          <img
            className='w-auto h-3/4 top-12  left-0 mx-auto right-0 z-10 absolute '
            src='/IceKaiMeta@2x.png'
          />
          <div className='h-auto p-4  text-white'>
            <div className='flex justify-between'>
              <p>IsekaiMeta</p>

              <p>
                0.57 ETH <br></br> All Time High
              </p>
            </div>
            <div className='mt-2 text-justify text-sm'>
              <p>Goblintown was disovered at 116 followers.</p>
              <p>It has now over 183K followers.</p>
            </div>
          </div>
        </div>{' '}
        <div className=' font-bold relative rounded-2xl overflow-hidden shadow-md  w-full    bg-gradient-to-b from-cblue1 via-cblue2 to-cblue2 mx-0'>
          <img className='max-w-full h-auto rounded-2xl p-2' src='/4.png' />
          <img
            className='w-auto h-3/4 top-6  left-0 mx-auto right-0 z-10 absolute '
            src='/BokiNFT@2x.png'
          />
          <div className='h-auto p-4  text-white'>
            <div className='flex justify-between'>
              <p>BokiNFT</p>

              <p>
                1.5 ETH <br></br> All Time High
              </p>
            </div>
            <div className='mt-2 text-justify text-sm'>
              <p>Goblintown was disovered at 1115 followers.</p>
              <p>It has now over 107K followers.</p>
            </div>
          </div>
        </div>{' '}
      </div>{' '}
    </div>
  );
}
