export const ADD_TODO = '[Todo] Add';
export const LOAD_TODO = '[Todo] load';
export const addTodo = (todo) => { return { 'type': ADD_TODO, 'payload': todo }; };
export const loadTodos = () => { return { 'type': LOAD_TODO, 'payload': '' }; };

