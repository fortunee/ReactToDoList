import * as types from './typeConstants'

const loadTodos = (todos) => {
	return { type: types.LOAD_TODOS, payload: todos };
}
export default loadTodos;