const defaultState = {
    details: {},
    detailsOpen: false,
}

export const SET_DETAILS = 'SET_DETAILS';
export const SET_TODO_DETAILS_OPEN = 'SET_MODAL_DETAILS_OPEN';


export const todoDetailsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_DETAILS:
            return {...state, details: {...action.payload}};
        case SET_TODO_DETAILS_OPEN:
            return {...state, detailsOpen: action.payload};
        default:
            return state;
    }
}