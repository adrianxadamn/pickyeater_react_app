import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/box-sizing.css';
import './styles/normalize.css';
import './styles/reset.css';
import Header from './Header';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Header />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
