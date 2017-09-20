import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from  'redux-promise'
// import createLogger from 'redux-logger';

import App from './App';

// import { loadTodos } from './Actions/loadTodos';

import allReducers from './Reducer';

// const logger = createLogger();
const middlewares = [ thunk, promise ]
const store = createStore(allReducers, {}, applyMiddleware(...middlewares));

// store.dispatch(loadTodos(state.todos))

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
