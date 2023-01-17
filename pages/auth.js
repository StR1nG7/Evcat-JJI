import Head from 'next/head';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import styles from '../styles/Auth.module.css';
import { SignIn, SignUp } from '../components';

const Auth = () => {
    const [ value, setValue ] = useState(true);
    useEffect(() => {
        localStorage.clear();
    }, []);
  return (
    <>
    <Head>
        <title>Auth Page</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <main className={styles.main} >
        <div className={styles.container} >
        <div className={styles.logo}>
            <Image
                src="/login.png"
                width={170}
                alt='logo'
                height={85}
                loading="eager" 
                priority={true}
            />
        </div>
        {value? <SignIn/> : <SignUp/>}
        <span onClick={() => setValue(!value)} className={styles.no_account} >{value? `Don't have account yet?`: `Already have account?`}</span>
        </div>
    </main>
    </>
  )
}

export default Auth;

