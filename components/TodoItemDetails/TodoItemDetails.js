import React from 'react';
import styles from './TodoItemDetails.module.css';
import { IoCloseSharp } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { setTodoDetailsOpenReducer, setTodoDetailsReducerAction, asyncTodoReducerAction } from '../../src/store/actions';
import { AppButton } from '..';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TodoItemDetails = () => {
    const details = useSelector(state => state.details.detailsOpen);
    const data = useSelector(state => state.details.details);
    const date = new Date(data.createdAt);
    const dispatch = useDispatch();
    const closeDetails = () => {
      dispatch(setTodoDetailsOpenReducer(false));
      dispatch(setTodoDetailsReducerAction({}));
    }
    const deleteTodo = async() => {
      await axios.delete(`${process.env.NEXT_PUBLIC_SITE_URL}/api/delete-todo`, {data: {key: process.env.NEXT_PUBLIC_TODO_KEY, id: data.id}});
      dispatch(asyncTodoReducerAction());
      return toast.success('Todo deleted', {
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
    <dialog 
      open={details} 
      className={styles.container} 
    >
      <ToastContainer/>
      <IoCloseSharp className={styles.sharp_icon}  onClick={closeDetails} />
      <div className={styles.detail_container} >
      <h1 className={styles.title} >Title: {data.title}</h1>
      <h2 className={styles.body} >Body: {data.body}</h2>
      <p className={styles.date} >Created: {date.toUTCString()}</p>
      </div>
      <div className={styles.btn_container} >
        <AppButton width={120} height={40} onClick={deleteTodo} >Delete Task</AppButton>
      </div>
    </dialog>
  )
}

export default TodoItemDetails;
