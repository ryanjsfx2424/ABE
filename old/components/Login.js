import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from './Header';
import MainContent from './MainContent';

export default function Login() {
    return (
        <div className={styles.container}>
          <Head>
            <title>ABE</title>
            <meta name="description" content="Always Be Early (ABE) by Ei Labs" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <div className=' bg-gradient-to-b   font-body  from-cblue2 via-cblue2 to-cblue2'>
              <Header />
              <MainContent />
          </div>
        </div>
    )
}