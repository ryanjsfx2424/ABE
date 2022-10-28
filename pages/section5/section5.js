import Link from 'next/link';
import Image from 'next/dist/client/image';
import { useState } from 'react';

export default function Section5() {
  return (
    <div className=' py-24     '>
      <div className='max-w-2xl mx-auto  px-4 text-lg  items-center   gap-y-16  mx-auto lg:max-w-7xl max-w-2xl py-24 sm:px-6    '>
        <h1 className='  text-transparent bg-clip-text bg-gradient-to-r from-cblue2 via-cblue2 to-gray-100  mb-8  text-center lg:text-left  font-extrabold  text-6xl   '>
          Our Team
        </h1>

        <div className='grid h-full text-white  my-24 font-medium gap-8 gap-y-24 lg:grid-cols-3 grid-cols-1'>
          <div className='mx-auto text-center '>
            <img
              src='./cryptophrank@2x.png'
              className='w-64 h-auto mx-auto rounded-full'
            />
            <p className='  text-transparent bg-clip-text bg-gradient-to-r from-cblue2 via-cblue2 to-gray-100  my-8  font-extrabold  text-3xl   '>
              cryptophrank
            </p>
            <p className=' text-2xl font-extrabold'>Founder</p>
          </div>
          <div className='mx-auto text-center '>
            <img
              src='./InvestingSpreads@2x.png'
              className='w-64 h-auto rounded-full mx-auto'
            />
            <p className='  text-transparent bg-clip-text bg-gradient-to-r from-cblue2 via-cblue2 to-gray-100  my-8   font-extrabold  text-3xl   '>
              InvestingSpreads
            </p>
            <p className=' text-2xl font-extrabold'>
              Sr Analyst, Founding Member
            </p>
          </div>
          <div className='mx-auto text-center '>
            <img
              src='./IamDuke@2x.png'
              className='w-64 h-auto rounded-full mx-auto'
            />
            <p className='  text-transparent bg-clip-text bg-gradient-to-r from-cblue2 via-cblue2 to-gray-100  my-8  font-extrabold  text-3xl   '>
              IamDuke
            </p>
            <p className=' text-2xl font-extrabold'>
              Sr Analyst, Founding Member
            </p>
          </div>
          <div className='mx-auto text-center '>
            <img
              src='./Ambergris@2x.png'
              className='w-64 h-auto rounded-full mx-auto'
            />
            <p className='  text-transparent bg-clip-text bg-gradient-to-r from-cblue2 via-cblue2 to-gray-100  my-8   font-extrabold  text-3xl   '>
              Ambergris
            </p>
            <p className=' text-2xl font-extrabold'>
              Sr Analyst, Founding Member
            </p>
          </div>

          <div className='mx-auto text-center '>
            <img
              src='./Mad_Neuroscientist@2x.png'
              className='w-64 h-auto rounded-full mx-auto'
            />
            <p className='  text-transparent bg-clip-text bg-gradient-to-r from-cblue2 via-cblue2 to-gray-100  my-8   font-extrabold  text-3xl   '>
              Mad_Neuroscientist
            </p>
            <p className=' text-2xl font-extrabold'>
              Sr Analyst, Founding Member
            </p>
          </div>

          <div className='mx-auto text-center '>
            <img
              src='./tarzansmol.png'
              className='w-64 h-auto rounded-full mx-auto'
            />
            <p className='  text-transparent bg-clip-text bg-gradient-to-r from-cblue2 via-cblue2 to-gray-100  my-8   font-extrabold  text-3xl   '>
              Tarzonsmol
            </p>
            <p className=' text-2xl font-extrabold'>
              Strategic Paternership Manager
            </p>
          </div>

          <div className='mx-auto text-center '>
            <img
              src='./youmei.png'
              className='w-64 h-auto rounded-full mx-auto'
            />
            <p className='  text-transparent bg-clip-text bg-gradient-to-r from-cblue2 via-cblue2 to-gray-100  my-8   font-extrabold  text-3xl   '>
              Youmei
            </p>
            <p className=' text-2xl font-extrabold'>Marketing Lead</p>
          </div>
          <div className='mx-auto text-center '>
            <img
              src='./RyanTheLunaLabs.webp'
              className='w-64 h-auto rounded-full mx-auto'
            />
            <p className='  text-transparent bg-clip-text bg-gradient-to-r from-cblue2 via-cblue2 to-gray-100  my-8   font-extrabold  text-3xl   '>
              TheLunaLabs
            </p>
            <p className=' text-2xl font-extrabold'>Lead Discord Developer </p>
          </div>
          <div className='mx-auto text-center '>
            <img
              src='./signal.jpeg'
              className='w-64 h-auto rounded-full mx-auto'
            />
            <p className='  text-transparent bg-clip-text bg-gradient-to-r from-cblue2 via-cblue2 to-gray-100  my-8   font-extrabold  text-3xl   '>
              ITBrainComPK
            </p>
            <p className=' text-2xl font-extrabold'>Lead Web Developer </p>
          </div>
        </div>
      </div>
    </div>
  );
}
