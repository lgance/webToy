import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './shared/App';

import Root from './client/Root';
import * as serviceWorker from './serviceWorker';

import 'styles/reset.scss';
import 'styles/common.scss';

ReactDOM.render(<Root />, document.getElementById('app-root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
