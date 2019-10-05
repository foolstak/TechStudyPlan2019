import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './components/store/index.js';
import { addTaskPack } from './components/store/actions/actions';
import './index.css';

import App from './App';
import * as serviceWorker from './serviceWorker';

window.store = store;
window.addTaskPack = addTaskPack;

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();