import * as React from 'react';
import * as ReactDOM from 'react-dom';
import WebFont from 'webfontloader';

import { App } from './app';

import './index.css';

WebFont.load({
    google: {
        families: ['Nunito:600', 'sans-serif']
    }
});

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
