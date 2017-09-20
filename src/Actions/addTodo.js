const addTodo = (todo) => {
    console.log('You trying to add a todo', todo)
    return {
        type: "ADD_TODO",
        payload: todo
    }
}

export default addTodo;