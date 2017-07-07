export const ADD_TODO = '[Todo] Add';
export const LOAD_TODO = '[Todo] load';
export const TOGGLE_TODO = '[Todo] Toggle';
export const addTodo = (todo) => { return { 'type': ADD_TODO, 'payload': todo }; };
export const toggleTodo = (id) => { return { 'type': TOGGLE_TODO, 'payload': id }; };
export const loadTodos = () => { return { 'type': LOAD_TODO, 'payload': '' }; };

