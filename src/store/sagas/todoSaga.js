import { put, call, takeEvery } from 'redux-saga/effects';
import { todoReducerAction } from '../actions';
import axios from 'axios';
import { FETCH_TODOS } from '../reducers/todoReducer';

const fetcher = () => axios.post(`${process.env.NEXT_PUBLIC_SITE_URL}/api/get-todos`, {key: process.env.NEXT_PUBLIC_TODO_KEY})

function* todoWorker() {
    const {data} = yield call(fetcher);
    yield console.log(data);
    yield put(todoReducerAction(data))
}

export function* todoWatcher() {
    yield takeEvery(FETCH_TODOS, todoWorker);
}