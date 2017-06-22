export const ADD_TODO = '[Todo] Add';
export const LOAD_TODO = '[Todo] load';
export const COMPLETE_TODO = '[Todo] Complete'
export const addTodo = (todo) => { return { 'type': ADD_TODO, 'payload': todo }; };
export const completeTodo = (path) => { return { 'type': COMPLETE_TODO, 'payload': path }; };
export const loadTodos = () => { return { 'type': LOAD_TODO, 'payload': '' }; };

