import { view, lensPath, append, curry, compose, evolve, T, F, lt, length, map, project, over, assoc } from 'ramda';

export enum SourceType {
    FOLDER = 1,
    DOCUMENT = 2
}
export class TreeNode {
    public title: string;
    public nodes: TreeNode[];
    public expanded: boolean;
    public selected: boolean;
    public isParent?: boolean;
    public focused: boolean;
    public tabIndex: number;
    public key: string;
    public level: number;
    fromValues(values: TreeNode) {
        return Object.assign(this, values);
    }
}

export const getChildrens = (path) => view(lensPath(append('nodes', path)));
export const removeChildrens = evolve({ nodes: () => [] });
export const getNodesWithoutChildrens = map(removeChildrens);
export const hasChildrens = curry((path, nodelist) => compose(
    lt(0),
    length,
    view(lensPath(append('nodes', path)))
)(nodelist));

export const selectNode = curry((path) => over(lensPath(path), evolve({ selected: T })));
export const unselectNode = curry((path) => over(lensPath(path), evolve({ selected: F })));

const updateNodeForFocus = evolve({
    focused: T,
    tabIndex: () => 0
});
const updateNodeForUnfocus = evolve({
    focused: F,
    tabIndex: () => -1
});
export const unfocusNode = curry((path) => over(lensPath(path), updateNodeForUnfocus));
export const focusNode = curry((path) => over(lensPath(path), updateNodeForFocus));
export const expandNode = curry((path) => over(lensPath(path), evolve({ expanded: T })));
export const collapseNode = curry((path) => over(lensPath(path), evolve({ expanded: F })));
export const replacePreviousSelectedPathWith = assoc('selectedPath');
export const replacePreviousFocusedPathWith = assoc('focusedPath');
export const addChildrens = curry((path, childrensToAdd: TreeNode[]) =>
    over(lensPath(path), evolve({ nodes: () => childrensToAdd })));



