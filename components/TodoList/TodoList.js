import React, { useEffect } from 'react';
import styles from './TodoList.module.css';
import { TodoItem } from '..';
import { useDispatch, useSelector } from 'react-redux';
import { asyncTodoReducerAction } from '../../src/store/actions';


const TodoList = ({input}) => {
  const username = JSON.parse(localStorage.getItem('token')).username;
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos.todos);
  const todoItems = todos.filter(todo => todo.authorusername === username);

  useEffect(() => {

    dispatch(asyncTodoReducerAction());
  }, [])


  return (
    <div className={styles.todo_container} >
      {todoItems.length > 0? 
      todoItems.
        filter(todo => input.length !== 0? todo.title.toLowerCase().includes(input.toLowerCase()) : todo).
        map(
        (todo) => <TodoItem key={todo.id} title={todo.title} created={todo.createdAt} todo={todo}  />
      ) 
      : 
      <p className={styles.no_yet}>No todos Yet!</p>
      }
    </div>
  )
}

export default TodoList;