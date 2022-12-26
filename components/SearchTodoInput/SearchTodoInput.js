import React from 'react';
import styles from './SearchTodo.module.css';
import { SlMagnifier } from 'react-icons/sl';


const SearchTodoInput = ({placeholder, value, ...props}) => {
  return (
    <div className={styles.input_container}>
      <SlMagnifier className={styles.mignifier} />
      <input className={styles.input} value={value} type='text' placeholder={placeholder} {...props} />
    </div>
  )
}


export default SearchTodoInput;
