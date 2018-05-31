import { actionsEnum } from '../actions/actionTypes';

const initialState = {
    name: '',
    genre: '',
    authorId: ''
};

export const onChangeFormReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case actionsEnum.ONCHANGE_FORM_NAME: {
            return { ...state, name: action.payload }
        }
        case actionsEnum.ONCHANGE_FORM_GENRE: {
            return { ...state, genre: action.payload }
        }
        case actionsEnum.ONCHANGE_FORM_AUTHOR_ID: {
            return { ...state, authorId: action.payload }
        }
        default: 
            return state
    }
}