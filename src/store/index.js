import { combineReducers, createStore, applyMiddleware } from 'redux';
import { modalReducer } from './reducers/modalReducer';
import { todoDetailsReducer } from './reducers/todoDetailsReducer';
import { todoReducer } from './reducers/todoReducer';
import createSagaMiddleware from '@redux-saga/core';
import { rootWatcher } from './sagas';


const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    modal: modalReducer,
    details: todoDetailsReducer,
    todos: todoReducer
});


export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootWatcher);