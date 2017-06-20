export const TOGGLE_NODE = '[Tree] toggle node';
export const LOAD = '[Tree] load';
export const toggleNode = (path) => { return { 'type': TOGGLE_NODE, 'payload': path }; };
export const loadTree = () => { return { 'type': LOAD, 'payload': '' }; };

