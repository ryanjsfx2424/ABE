import styles from '../hero/hero.module.css';
import Link from 'next/link';
import Image from 'next/dist/client/image';
import Typewriter from 'typewriter-effect';
import { useState } from 'react';

export default function Hero() {
  return (
    <div className='  max-w-2xl sm:px-6   px-4 text-center    mx-auto  font-body    lg:max-w-4xl lg:px-12  '>
      <h1 className='font-extrabold capitalize text-4xl md:text-7xl lg:text-8xl'>
        Always be early to NFT projects
      </h1>
      <p className='text-xl lg:text-2xl p-16'>
        ABE uses artifical intelligence to comb through thousands of projects
        and only presents the most promising ones, saving you countless hours of
        research.
      </p>
      <button className='rounded-full lg:w-96 w-full  bg-cdark text-2xl lg:text-5xl text-white p-4'>
        Get In Touch
      </button>
      <div className='grid grid-cols-2 mt-8 mx-auto w-full lg:w-96 gap-2'>
        <div>
          <p className='text-xl lg:text-2xl'>
            Join <span className='font-extrabold'>100K +</span>
          </p>
          <p className='text-xl lg:text-2xl'>unique users!</p>
        </div>
        <div className='   '>
          <img src='./users@2x.png' className='w-32' />
        </div>
      </div>{' '}
      <div className=' mt-8 h-full mx-auto lg:hidden block'>
        <img src='./iPhone.png' className='   w-96 left-0 mx-auto right-0' />
      </div>
      <div className=' mt-8 h-full mx-auto lg:block hidden'>
        <img
          src='./mobile.png'
          className=' absolute w-96 left-0 mx-auto right-0'
        />
      </div>
      <div className=' lg:my-32  my-16 sm:px-6  px-4 lg:text-center text-left   font-body       '>
        <div className='grid grid-cols-2 '>
          <div className='flex gap-x-2 w-full mx-auto  lg:-mx-8'>
            <img src='./icon4@2x.png' className='h-6 w-auto' />
            <p className='text-xl font-bold'> 30+ Communities</p>
          </div>
          <div className='flex gap-x-2 w-full    mx-auto lg:mx-48 '>
            <img src='./icon2@2x.png' className='h-6 w-auto' />
            <p className='text-xl text-left font-bold'>
              {' '}
              100+ Successful <br />
              Projects
            </p>
          </div>
        </div>
      </div>{' '}
      <div className=' pb-16 sm:px-6  px-4 text-center    mx-auto  font-body       '>
        <div className='grid grid-cols-2'>
          <div className='flex gap-x-2 w-full mx-auto  lg:-mx-8'>
            <img src='./icon3@2x.png' className='h-6 w-auto' />
            <p className='text-xl text-left font-bold'>
              {' '}
              Thousands of Hours
              <br /> Saved
            </p>
          </div>

          <div className='flex gap-x-2 w-full    mx-auto lg:mx-48 '>
            <img src='./icon1@2x.png' className='h-6 w-auto' />
            <p className='text-xl text-left font-bold'>
              {' '}
              Tested & Trusted <br /> by analysts
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
