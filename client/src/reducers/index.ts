import { combineReducers } from 'redux';
import { onChangeFormReducer } from './onChangeFormReducer';
import { selectBookReducer } from './selectBookReducer';

export const rootReducer = combineReducers({
    onChangeFormReducer,
    selectBookReducer
});
