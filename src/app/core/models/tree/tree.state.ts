
import { Path } from 'app/core/models/common/path';
import { TreeNode } from 'app/core/models/tree/tree-node.model';

export interface State {
    loading: boolean;
    selectedPath?: Path;
    nodes: TreeNode[];
    focusedPath?: Path;
}

export const initialState = {
    loading: false,
    selectedPath: [],
    nodes: [],
    focusedPath: []
};


