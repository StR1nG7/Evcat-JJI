import React from 'react';
import styles from './TodoItem.module.css';
import { FiMoreVertical } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { setTodoDetailsOpenReducer, setTodoDetailsReducerAction } from '../../src/store/actions';

const TodoItem = ({title, created, todo, ...props}) => {

  const dispatch = useDispatch();
  const data = useSelector(state => state.details.details);

  const showDetails = (e) => {
    dispatch(setTodoDetailsOpenReducer(true));
    dispatch(setTodoDetailsReducerAction(todo))

    console.log(data)
  }
  
  const date = new Date(created);
  const time = date.toUTCString();
  return (
    <div className={styles.todo_container} {...props} >
        <h1 className={styles.title} >{title}</h1>
        <span className={styles.date} >{time}</span>
        <FiMoreVertical className={styles.show_more}  onClick={(e) => showDetails(e)} />
    </div>
  )
}


export default TodoItem