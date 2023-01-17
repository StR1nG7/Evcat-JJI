import React from 'react';
import styles from './SignIn.module.css';
import { AuthButton, AuthInput } from '..';
import { useForm } from "react-hook-form";
import axios from 'axios';
import useLocalStorage from 'use-local-storage';
import { useRouter } from "next/router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toastifyConfig } from '../../src/data/toastify';

const SignIn = () => {
  const router = useRouter();
  const [ userStorage, setUserStorage ] = useLocalStorage('token', '');
  const { register, handleSubmit, reset } = useForm();
  const signIn = async(value) => {
    const { data } = await axios.post(`${process.env.NEXT_PUBLIC_SITE_URL}/api/sign-in`, value);
    if(data.token === undefined) {
      return toast.warn('Invalid username or password', toastifyConfig);
    }
    setUserStorage(data);
    router.push('/')
    reset();
  }
  return (
    <form className={styles.form} onSubmit={handleSubmit(signIn)}  >
      <ToastContainer/>
      <AuthInput placeholder='username' type='text' {...register('username')} required/>
      <AuthInput placeholder='password' type='password' {...register('password')} autoComplete="on" required/>
      <AuthButton type="submit" >Sign In</AuthButton>
    </form>
  )
}

export default SignIn;

