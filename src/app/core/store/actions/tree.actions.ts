export const TOGGLE_NODE = '[Tree] toggle node';
export const LOAD = '[Tree] load';
export const LOAD_SUCCESS = '[Tree] Load Success';
export const LOAD_FAIL = '[Tree] Load Fail';

export const SELECT_EXPAND = '[Tree] Select Expand';
export const SELECT_COLLAPSE = '[Tree] Select Collapse';
export const SELECT_EXPAND_ADD_CHILDREN = '[Tree] Select Expand Add Children';

export const toggleNode = (path) => ({
    'type': TOGGLE_NODE, 'payload': path
});

export const loadTree = () => ({
    type: LOAD, payload: ''
});

export const loadTreeSuccess = (nodelist) => ({
    type: LOAD_SUCCESS, payload: nodelist
});

export const loadTreeFail = (e) => ({
    type: LOAD_FAIL, payload: e
});

export const selectExpand = (path, hasChildrens) => ({
    type: SELECT_EXPAND,
    payload: { path, hasChildrens }
});

export const selectCollapse = (path) => ({
    type: SELECT_COLLAPSE,
    payload: path
});

export const selectExpandAddChildren = (path, nodes) => ({
    type: SELECT_EXPAND_ADD_CHILDREN,
    payload: { path, nodes }
});

