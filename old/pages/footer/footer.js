import Link from 'next/link';
import Image from 'next/dist/client/image';

export default function Footer() {
  return (
    <div className='max-w-2xl mx-auto  px-4 text-lg  items-center   gap-y-16  mx-auto lg:max-w-7xl max-w-2xl py-24 sm:px-6   '>
      <div className='grid grid-cols-1 lg:grid-cols-3 '>
        <div className='col-span-1'>
          <img src='/logochange.png' className='mx-auto my-8' />
          <p className='text-lg text-center font-thin text-white'>
            We create solutions to give you a head start in your research of
            amazing NFT Projects.
          </p>
        </div>
        <div></div>
        <div className='flex my-8 gap-x-8 justify-between'>
          <div>
            <p className='text-xl font-bold text-white'> EI Labs</p>
            <p className='text-lg text-white'>Home</p>
            <p className='text-lg text-white'>About ABE</p>
            <p className='text-lg text-white'>Testimonials</p>
          </div>
          <div>
            <p className='text-xl font-bold text-white'> Contact</p>
            <p className='text-lg text-white'>Twitter</p>
            <p className='text-lg text-white'>Instagram</p>
            <p className='text-lg text-white'>Email</p>
          </div>
          <div>
            <p className='text-xl font-bold text-white'> Useful</p>
            <p className='text-lg text-white'>Privacy Policy</p>
            <p className='text-lg text-white'>Terms of Service</p>
          </div>
        </div>
      </div>
      <p className=' py-24 text-center text-white text-2xl'>
        Copyright &copy; 2022{' '}
      </p>
    </div>
  );
}
