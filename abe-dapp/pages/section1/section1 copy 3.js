import styles from '../section1/section1.module.css';
import Link from 'next/link';
import Image from 'next/dist/client/image';

export default function Section1() {
  return (
    <div className='mx-auto lg:max-w-screen-2xl  py-24	  text-lg  items-center   gap-y-16  sm:px-6     '>
      <h1 className=' md:mt-64 mt-auto lg:mt-64 max-w-2xl px-6 lg:text-6xl  md:text-5xl text-4xl text-transparent bg-clip-text bg-gradient-to-r from-cblue2 via-cblue2 to-gray-100  mb-8  text-center lg:text-left  font-extrabold    lg:max-w-full lg:px-8 '>
        Top Discoveries
      </h1>
      <div className='grid lg:grid-cols-3  grid-cols-1  md:grid-cols-2 gap-4  '>
        <div className='   font-bold w-96  relative mx-auto rounded-2xl overflow-hidden shadow-md     bg-gradient-to-b from-cblue1 via-cblue2 to-cblue2 '>
          <img className='relative p-2' src='/2.png' />

          <img
            className='absolute top-[80px] left-0 right-0 mx-auto w-[180px] h-auto'
            src='/goblintown@2x.png'
          />
          <div className='h-auto px-4 py-4 relative  text-white'>
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

        <div className='   font-bold w-96  relative mx-auto rounded-2xl overflow-hidden shadow-md     bg-gradient-to-b from-cblue1 via-cblue2 to-cblue2 '>
          <img className='relative p-2' src='/2.png' />

          <img
            className='absolute top-[80px] left-0 right-0 mx-auto w-[180px] h-auto'
            src='/goblintown@2x.png'
          />
          <div className='h-auto px-4 py-4 relative  text-white'>
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
        <div className='   font-bold w-96  relative mx-auto rounded-2xl overflow-hidden shadow-md     bg-gradient-to-b from-cblue1 via-cblue2 to-cblue2 '>
          <img className='relative p-2' src='/2.png' />

          <img
            className='absolute top-[80px] left-0 right-0 mx-auto w-[180px] h-auto'
            src='/goblintown@2x.png'
          />
          <div className='h-auto px-4 py-4 relative  text-white'>
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
      </div>

      <div className='grid lg:grid-cols-2 lg:my-24 my-4 grid-cols-1  md:grid-cols-2 gap-4  '>
        <div className='   font-bold w-96  relative mx-auto rounded-2xl overflow-hidden shadow-md     bg-gradient-to-b from-cblue1 via-cblue2 to-cblue2 '>
          <img className='relative p-2' src='/2.png' />

          <img
            className='absolute top-[80px] left-0 right-0 mx-auto w-[180px] h-auto'
            src='/goblintown@2x.png'
          />
          <div className='h-auto px-4 py-4 relative  text-white'>
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
        <div className='   font-bold w-96  relative mx-auto rounded-2xl overflow-hidden shadow-md     bg-gradient-to-b from-cblue1 via-cblue2 to-cblue2 '>
          <img className='relative p-2' src='/2.png' />

          <img
            className='absolute top-[80px] left-0 right-0 mx-auto w-[180px] h-auto'
            src='/goblintown@2x.png'
          />
          <div className='h-auto px-4 py-4 relative  text-white'>
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
      </div>
    </div>
  );
}
