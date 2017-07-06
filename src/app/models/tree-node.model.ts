
export type Path = any[];
export interface TreeNode {
    title: string;
    expanded: boolean;
    selected: boolean;
    nodes: TreeNode[];
}

export class TreeNode {
    constructor(
        public title: string,
        public nodes: TreeNode[],
        public expanded: boolean,
        public selected: boolean,
    ) {

    }
    fromValues(values: TreeNode) {
        return Object.assign(this, values);
    }
}