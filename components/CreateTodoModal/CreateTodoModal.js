import React from 'react';
import { DialogInput, TextAreaModal, AppButton } from '..';
import styles from './CreateTodoModal.module.css';
import { useSelector } from 'react-redux';
import { IoCloseSharp } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { modalReducerAction, asyncTodoReducerAction } from '../../src/store/actions'
import useLocalStorage from 'use-local-storage';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';
import { toastifyConfig } from '../../src/data/toastify';



const CreateTodoModal = () => {
  const { register, handleSubmit, reset } = useForm();
  const open = useSelector(state => state.modal.openModal);
  const [ storage, setStorage ] = useLocalStorage('token');
  const dispatch = useDispatch()

  const createTodoItem = async(fields) => {
    if(!fields.title || !fields.body) {
      return toast.warn('Please fill All inputs', toastifyConfig)
    }
    const requestData = {
      title: fields.title,
      body: fields.body,
      authorusername: storage.username,
      key: process.env.NEXT_PUBLIC_TODO_KEY
    }
      await axios.post(`${process.env.NEXT_PUBLIC_SITE_URL}/api/create-todo`, requestData);
      dispatch(asyncTodoReducerAction());
      reset();
      toast.success('Todo created successfully', toastifyConfig);
  }

  return (
    <motion.dialog open={open} className={styles.modal}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 1}}
    >
      <ToastContainer/>
      <div className={styles.modal_container}>
        <form method='dialog' className={styles.modal_items} onSubmit={handleSubmit(createTodoItem)} >
            <IoCloseSharp className={styles.close_btn} onClick={() => dispatch(modalReducerAction())} />
            <DialogInput type='text' placeholder='Enter title' height='40px' {...register('title')} />
            <TextAreaModal placeholder='Enter Body' {...register('body')}/>
            <AppButton type="submit" width={200} height={50} >Create Todo</AppButton>
        </form>
      </div>
    </motion.dialog>
  )
}

export default CreateTodoModal;