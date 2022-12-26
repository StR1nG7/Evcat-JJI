import React from 'react';
import { AuthButton, AuthInput } from '..';
import { useForm } from "react-hook-form";
import axios from 'axios';
import styles from './SignUp.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {

  const { register, handleSubmit, reset } = useForm();
  const signUp = async(value) => {
    if(value.password !== value.confirmPassword) {
      return toast.warn("The repeated password doesn't match", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });
    }
    const config = {
      username: value.username,
      password: value.password
    }
      await axios.post(`${process.env.NEXT_PUBLIC_SITE_URL}/api/sign-up`, config);
    reset();
    return toast.success('User signed up successfully', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });
  }
  return (
    <form className={styles.form} onSubmit={handleSubmit(signUp)} >
        <ToastContainer/>
        <AuthInput placeholder='username' type='text' {...register('username')} required/>
        <AuthInput placeholder='password' type='password' {...register('password')} autoComplete="on" required/>
        <AuthInput placeholder='repeat password' type='password' {...register('confirmPassword')} autoComplete="on" required/>
        <AuthButton type="submit" >Sign Up</AuthButton>
    </form>
  )
}

export default SignUp;