const defaultState = {
    modalOpen: false,
} 

export const SET_MODAL = "SET_MODAL";

export const modalReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_MODAL:
            return {...state, openModal: !state.openModal}
        default:
            return state;
    }
}
