import * as types from './typeConstants';

const addTodo = (todo) => {
    return {
        type: types.ADD_TODO,
        payload: todo
    }
}

export default addTodo;