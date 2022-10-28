import styles from '../header/header.module.css';
import Link from 'next/link';
import Image from 'next/dist/client/image';
import { useState, useEffect, useRef } from 'react';
import Hero from '../hero/hero';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();
  function handleStory(e) {
    e.preventDefault();

    router.push('/#story');
  }

  function handleCollection() {
    router.push('/#collection');
  }
  function handleContact() {
    router.push('/#contact');
  }
  function handleRoad() {
    router.push('/#road');
  }

  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 80);
    });
  }, []);

  return (
    <header>
      <div className='  bg-no-repeat bg-center bg-fixed bg-auto bg-gradient-to-b rounded-b-large  from-cblue1 to-cblue2  '>
        <div className='container mx-auto px-6 sm:px-12 flex items-center justify-between'>
          <nav
            className={` z-10 fixed top-0 left-0 w-screen transition-all duration-200 flex items-center flex-wrap  px-28  p-2 
            ${scroll ? 'bg-custom' : 'bg-transparent'} 
          ${active ? 'h-48  bg-custom text-white' : 'h-18'}  

          `}
          >
            <Link href='/'>
              <a className='inline-flex items-start  md:mx-0 mx-auto  '>
                <img
                  src='/logo@2x.png'
                  className={`w-24 h-auto  md:w-36 lg:w-36        `}
                />
              </a>
            </Link>
            <button
              className={`     hover:bg-custom rounded lg:hidden text-white  hover:text-white outline-none ${
                scroll ? 'bg-custom  ' : 'bg-transparent'
              }
              ${active ? '  bg-custom  ' : ' '}  
              `}
              onClick={handleClick}
            >
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            </button>
            <div
              className={` 
               ${
                 active
                   ? ' '
                   : 'lg:float-right lg:text-white    lg:w-full -mt-14 hidden  lg:flex-row  lg:inline-flex'
               } w-full   `}
            >
              <div className='lg:inline-flex lg:mr-10 p-7 lg:flex-row lg:ml-auto lg:w-auto w-full items-center items-start   flex flex-col lg:h-auto'>
                <button onClick={handleStory}>
                  <a
                    className={`  lg:inline-flex lg:w-auto w-full  px-3  mx-2 py-1 rounded bg-custom  font-bold items-center justify-center hover:bg-white  hover:text-custom  `}
                  >
                    Story
                  </a>
                </button>
                <button onClick={handleRoad}>
                  <a
                    className={`  lg:inline-flex lg:w-auto w-full  px-3  mx-2 py-1 rounded bg-custom  font-bold items-center justify-center hover:bg-white  hover:text-custom  `}
                  >
                    {' '}
                    Roadmap
                  </a>
                </button>
                <button onClick={handleCollection}>
                  <a
                    className={`  lg:inline-flex lg:w-auto w-full  px-3  mx-2 py-1 rounded bg-custom  font-bold items-center justify-center hover:bg-white  hover:text-custom  `}
                  >
                    {' '}
                    Collection
                  </a>
                </button>
                <button onClick={handleContact}>
                  <a
                    className={`  lg:inline-flex lg:w-auto w-full  px-3  mx-2 py-1 rounded bg-custom  font-bold items-center justify-center hover:bg-white  hover:text-custom  `}
                  >
                    {' '}
                    Contact
                  </a>
                </button>
              </div>
            </div>
          </nav>
        </div>{' '}
        <Hero className='relative' />
      </div>
    </header>
  );
}
