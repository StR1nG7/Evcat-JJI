import React from 'react';
import styles from './NewTaskButton.module.css';
import { BsPlusLg } from 'react-icons/bs';

const NewTaskButton = ({title, ...props}) => {
  return (
    <div className={styles.button_container} >
        <span  className={styles.title} >{title}</span>
        <button className={styles.button} {...props} ><BsPlusLg style={{fontSize: '20px'}} /></button>
    </div>
  )
}

export default NewTaskButton;
