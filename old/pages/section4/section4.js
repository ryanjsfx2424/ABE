import Link from 'next/link';
import Image from 'next/dist/client/image';
import { useState } from 'react';

export default function Section4() {
  return (
    <div className='     '>
      <div className='max-w-2xl mx-auto  px-4 text-lg  items-center   gap-y-16  mx-auto lg:max-w-7xl max-w-2xl py-24 sm:px-6   '>
        <h1 className='  text-transparent bg-clip-text bg-gradient-to-r from-cblue2 via-cblue2 to-gray-100  mb-8  text-center lg:text-left  font-extrabold  text-6xl   '>
          Testimonials
        </h1>

        <div className='grid h-full my-24 font-medium gap-8 gap-y-24 lg:grid-cols-2 grid-cols-1'>
          <div className=' relative rounded-xl py-6  border border-white border-opacity-20 text-center text-white bg-gradient-to-t  from-gr1 via-gr2 to-gr3  '>
            <div className=' bg-gradient-to-t  from-cblue2 via-cblue1 to-cblue2 rounded-full  w-32 h-32 absolute left-0 right-0 mx-auto  -top-20 '>
              <img
                src='./Team Wen Moon Marz@2x.png'
                className=' w-32 h-full p-1 rounded-full '
              />
            </div>
            <p className='text-2xl my-16 font-extrabold'>Team Wen Moon Marz</p>

            <p>
              I love the ability to pick early projects that look worthy for
              collabs and Alpha reports. You know how I feel? I think it's
              amazing!
            </p>
            <p>
              It allows me to spend less time searching for Alpha and more time
              joining servers early and following projects
            </p>
          </div>
          <div className=' relative rounded-xl py-6  border border-white border-opacity-20 text-center text-white bg-gradient-to-t  from-gr1 via-gr2 to-gr3  '>
            <div className=' bg-gradient-to-t  from-cblue2 via-cblue1 to-cblue2 rounded-full  w-32 h-32 absolute left-0 right-0 mx-auto  -top-20 '>
              <img
                src='./@CrypicJE@2x.png '
                className=' w-32 h-full p-1 rounded-full '
              />
            </div>
            <p className='text-2xl my-16 font-extrabold'>@CrypticJE</p>

            <p>
              The AI is spot on. And really does well to find projects early! I
              am the alpha caller for my community, and it is a traders' dream.
              Finding hidden gems quick and early and allowing us to capitalize
              on opportunities
            </p>
          </div>{' '}
        </div>
      </div>
    </div>
  );
}
