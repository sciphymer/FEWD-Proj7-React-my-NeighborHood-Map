import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyNeighborhoodApp from './App';
import * as serviceWorker from './serviceWorker';
// import TestApp from './TestApp'

ReactDOM.render(<MyNeighborhoodApp />, document.getElementById('root'));
// ReactDOM.render(<TestApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
