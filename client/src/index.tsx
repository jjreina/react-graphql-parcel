import * as React from 'react';
import * as ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import { Provider } from 'react-redux';

import { App } from './app';
import { configureStore } from './store/configureStore';

const store = configureStore();

import './index.css';

WebFont.load({
    google: {
        families: ['Nunito:600', 'sans-serif']
    }
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,   
    document.getElementById('root')
);
