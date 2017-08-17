import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';

const state = {
    todos: [
        { id: 1, name: 'Go to the market'},
        { id: 2, name: 'Cook Egusi soup'},
        { id: 3, name: 'Have a good shower'},
        { id: 4, name: 'Get some sleep'}
    ]
}

ReactDOM.render(<App todos={state.todos}/>, document.getElementById('root'));
// registerServiceWorker();
