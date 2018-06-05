import { actionsEnum } from '../actions/actionTypes';

const initialState = {
    selectedBookId: null
};

export const selectBookReducer = ( state = initialState, action ) => {
    if (action.type === actionsEnum.SELECTED_BOOK) {
        return {...state, selectedBookId: action.payload};
    } else {
        return state;
    }
}