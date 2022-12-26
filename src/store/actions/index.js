import { SET_MODAL } from '../reducers/modalReducer';
import { SET_DETAILS, SET_TODO_DETAILS_OPEN } from '../reducers/todoDetailsReducer';
import { SET_TODOS, FETCH_TODOS } from '../reducers/todoReducer';

export const modalReducerAction = () => ({type: SET_MODAL});
export const setTodoDetailsReducerAction = (payload) => ({type: SET_DETAILS, payload});
export const setTodoDetailsOpenReducer = (payload) => ({type: SET_TODO_DETAILS_OPEN, payload});
export const todoReducerAction = (payload) => ({type: SET_TODOS, payload});
export const asyncTodoReducerAction = () => ({type: FETCH_TODOS});