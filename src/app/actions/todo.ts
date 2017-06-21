export const ADD_TODO = '[Todo] Add';
export const LOAD_TODO = '[Todo] load';
export const addTodo = (text) => { return { 'type': ADD_TODO, 'payload': text }; };
export const loadTodos = () => { return { 'type': LOAD_TODO, 'payload': '' }; };

