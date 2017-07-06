export const TOGGLE_NODE = '[Tree] toggle node';
export const LOAD = '[Tree] load';

export const SELECT_EXPAND = '[Tree] Select Expand Node';
export const SELECT_COLLAPSE = '[Tree] Select Expand Node';
export const SELECT_EXPAND_ADD_CHILDREN = '[Tree] Select Expand Add Children';

export const toggleNode = (path) => ({
    'type': TOGGLE_NODE, 'payload': path
});

export const loadTree = () => ({
    type: LOAD, payload: ''
});

export const selectExpand = (path) => ({
    type: SELECT_EXPAND,
    payload: path
});

export const selectCollapse = (path) => ({
    type: SELECT_EXPAND,
    payload: path
});

export const selectExpandAddChildren = (path, nodes) => ({
    type: SELECT_EXPAND_ADD_CHILDREN,
    payload: { path, nodes }
});

