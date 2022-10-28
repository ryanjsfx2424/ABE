import Link from 'next/link';
import Image from 'next/dist/client/image';
import { useState } from 'react';

export default function Section6() {
  return (
    <div className=' py-24     '>
      <div className='max-w-2xl mx-auto  px-4 text-lg  items-center   gap-y-16   mx-auto lg:max-w-7xl max-w-2xl py-24 sm:px-6   '>
        <div className=' text-white font-bold bg-no-repeat bg-center text-center flex flex-col justify-center items-center h-full py-12   bg-fixed bg-auto bg-gradient-to-b  rounded-2xl from-cblue2 via-cblue2 to-cblue2  '>
          <div className='   '>
            <p className='text-2xl   uppercase'>Join 30+ Communities</p>
            <p className=' text-xl lg:text-4xl my-8 text-cdark'>
              Don't Miss Out On The Next Big Thing
            </p>
            <button className='rounded-full lg:w-96 w-64 bg-cdark text-2xl lg:text-5xl text-white p-4'>
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
