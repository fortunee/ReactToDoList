const loadTodos = (todos) => {
	console.log('You are loading todos', todos)
	return { type: 'LOAD_TODOS', payload: todos };
}
export default loadTodos;