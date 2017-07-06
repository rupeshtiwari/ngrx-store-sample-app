import * as R from 'ramda';

export type Path = any[];
export class TreeNode {
    public title: string;
    public nodes: TreeNode[];
    public expanded: boolean;
    public selected: boolean;
    fromValues(values: TreeNode) {
        return Object.assign(this, values);
    }
}

export const getChildrens = (path) => R.view(R.lensPath(R.append('nodes', path)));
export const removeChildrens = R.evolve({ nodes: () => [] });
export const getNodesWithoutChildrens = R.map(removeChildrens);
export const hasChildrens = R.curry((path, nodelist) => R.compose(
    R.lt(0),
    R.length,
    R.view(R.lensPath(R.append('nodes', path)))
)(nodelist));

export const selectNode = R.curry((path) => R.over(R.lensPath(path), R.evolve({ selected: R.T })));
export const unselectNode = R.curry((path) => R.over(R.lensPath(path), R.evolve({ selected: R.F })));

const updateNodeForFocus = R.evolve({
    focused: R.F,
    tabIndex: () => -1
});
const updateNodeForUnfocus = R.evolve({
    focused: R.T,
    tabIndex: () => 0
});
export const unfocusNode = R.curry((path) => R.over(R.lensPath(path), updateNodeForFocus));
export const focusNode = R.curry((path) => R.over(R.lensPath(path), updateNodeForUnfocus));
export const expandNode = R.curry((path) => R.over(R.lensPath(path), R.evolve({ expanded: R.T })));
export const collapseNode = R.curry((path) => R.over(R.lensPath(path), R.evolve({ expanded: R.F })));
export const replacePreviousSelectedPathWith = R.assoc('selectedPath');
export const replacePreviousFocusedPathWith = R.assoc('focusedPath');
export const addChildrens = R.curry((path, childrensToAdd: TreeNode[]) =>
    R.over(R.lensPath(path), R.evolve({ nodes: () => childrensToAdd })));



