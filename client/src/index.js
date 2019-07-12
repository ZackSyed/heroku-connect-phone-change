import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Root from './root';
import * as serviceWorker from './serviceWorker';
import configureStore from './store';

document.addEventListener("DOMContentLoaded", () => {
    let store;
    if (window.current_user) {
        const preloadedState = {
            users: { [window.current_user.id]: window.current_user },
            session: { id: window.current_user.id }
        };
        store = configureStore(preloadedState);
        delete window.current_user;
    } else {
        store = configureStore();
    }

    ReactDOM.render(<Root store={store}/>, document.getElementById('root'));
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
