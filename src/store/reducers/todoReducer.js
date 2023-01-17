const defaultState = {
    todos: [],
}

export const SET_TODOS = 'SET_TODOS';
export const FETCH_TODOS = 'FETCH_TODOS';

export const todoReducer = ( state = defaultState, action ) => {
    switch (action.type) {
        case SET_TODOS:
            return {...state, todos: [...action.payload]};
        default:
            return state;
    }
}