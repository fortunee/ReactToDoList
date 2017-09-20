import { combineReducers } from 'redux';
import { taskReducer } from './taskReducer';

const allReducers = combineReducers ({
    todos: taskReducer
});

export default allReducers;
