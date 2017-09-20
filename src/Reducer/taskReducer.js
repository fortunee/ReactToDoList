// import { loadTodos } from './../Actions/loadTodos';

const tasks = {
    todos: [
        { id: 1, name: 'Go to the market'},
        { id: 2, name: 'Cook Egusi soup'},
        { id: 3, name: 'Have a good shower'},
        { id: 4, name: 'Get some sleep'}
    ]
}

// export const taskReducer = (state, action) => {
//     switch (action.type) {
//         case 'LOAD_TASKS':
//             return action.todos;
//         default:
//             return state;
//     } 
// }

export const taskReducer = () => {
    return tasks.todos;
}
