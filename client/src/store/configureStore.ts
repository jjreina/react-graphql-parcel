import createLogger from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';

import { rootReducer } from '../reducers';

export const configureStore = (initialState?) => {
    return createStore(
        rootReducer,
        initialState,
    )
};
