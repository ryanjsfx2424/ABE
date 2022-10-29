import Head from 'next/head';
import Footer from './footer/footer';
import Header from './header/header';
import Hero from './hero/hero';
import Section1 from './section1/section1';
import Section2 from './section2/section2';
import Section3 from './section3/section3';
import Section4 from './section4/section4';
import Section5 from './section5/section5';
import Section6 from './section6/section6';

export default function Home() {
  return (
    <div className='font-body'>
      <Head>
        <title>EI LABS</title>
        <meta name='description' content='EI NFT' />
        <link rel='icon' href='/logo@2x.png' />
      </Head>
      <div className=' bg-gradient-to-b   font-body  from-cblue2 via-cblue2 to-cblue2'>
        <Header />
        <Hero />
      </div>
      <div className='bg-cdark  font-body '>
        <Section1 className='relative' />
        <a id='road'>
          <Section2 className='relative' />{' '}
        </a>
        <a id='collection'>
          <Section3 className='relative' />
        </a>{' '}
        <a id='collection'>
          <Section4 className='relative' />
        </a>
        <Section5 />
        <Section6 />
        <Footer />
      </div>
    </div>
  );
}
