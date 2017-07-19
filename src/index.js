import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import AppComponent from './components/Main';
import {createStore} from 'redux';
import allReducers from './reducers';
import {Provider} from 'react-redux';
import LoginAndSignup from './components/login-signup';
import Header from './components/header';

const store = createStore(allReducers);

// Render the main component into the dom
ReactDOM.render(
    <Provider store = {store}>
        <AppComponent />
    </Provider>,
    document.getElementById('app'));

ReactDOM.render(<LoginAndSignup />,document.getElementById('signup'));
ReactDOM.render(<Header />,document.getElementById('header'));

