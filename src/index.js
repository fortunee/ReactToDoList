import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from  'redux-promise'
// import createLogger from 'redux-logger';

import App from './App';

import { actions } from './Actions/';

import allReducers from './Reducer';

// const logger = createLogger();
const middlewares = [ thunk, promise ]
const store = createStore(allReducers, {}, applyMiddleware(...middlewares));

// Mocked todos
const tasks = {
    todos: [
        { id: 1, name: 'Go to the market'},
        { id: 2, name: 'Cook Egusi soup'},
        { id: 3, name: 'Have a good shower'},
        { id: 4, name: 'Get some sleep'}
    ]
}

// Call to get a list of todos
store.dispatch(actions.loadTodos(tasks.todos))

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
