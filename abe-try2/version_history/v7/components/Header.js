import Link from 'next/link';
import Image from 'next/dist/client/image';
import { useState, useEffect, useRef } from 'react';
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
      <div className='  bg-no-repeat bg-center h-full bg-fixed bg-auto bg-gradient-to-b   rounded-b-large   '>
        <div className=' mx-auto px-6 sm:px-12 flex items-center justify-between'>
          <nav
            className={` z-10  top-0 left-0 w-screen transition-all duration-200 flex items-center flex-wrap  px-28
            ${scroll ? ' ' : ' '} 
          ${active ? 'h-48   text-white' : 'h-18'}  

          `}
          >
            <Link href='/'>
              <a className='inline-flex items-start  md:mx-0 mx-auto  '>
                <Image
                  alt="logo"
                  //src='/Ei-eye-banner-transparent.png' //'/logo@2x-white.png'
                  //width={360}//{256}
                  //height={140}//{46}
                  src='/logo@2x-white.png'
                  width={256}
                  height={46}
                  className={`w-24 h-auto  md:w-36 lg:w-36        `}
                />
              </a>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
