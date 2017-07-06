
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
