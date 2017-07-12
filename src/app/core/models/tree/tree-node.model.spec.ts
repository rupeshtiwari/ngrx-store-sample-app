import { addChildrens } from 'app/core/models/tree/tree-node.model';
import { focusNode } from 'app/core/models/tree';

describe('TreeNodeModel', () => {
    it('can focus node', () => {
        const node = { node: { focused: false, tabInde: -1 } };
        const expectedNode = { node: { focused: true, tabInde: 0 } };
        const result = focusNode(['node'])(node);
        expect(result).toEqual(expectedNode);
    });
    it('can add childrens', () => {
        const path = ['nodes', 0];
        const nodelist = {
            nodes: [{
                title: 'core',
                nodes: [],
                expanded: false,
                selected: false,
                tabIndex: -1,
                path: ['nodes', 0]
            }]
        };

        const childrensToAdd = [
            { title: 'core', nodes: [], expanded: false, selected: false, tabIndex: -1, path: ['nodes', 0, 'nodes', 0] },
            { title: 'shared', nodes: [], expanded: false, selected: false, tabIndex: -1, path: ['nodes', 0, 'nodes', 1] },
            { title: 'features', nodes: [], expanded: false, selected: false, tabIndex: -1, path: ['nodes', 0, 'nodes', 2] }
        ];
        const expectedNodelist = {
            nodes: [{
                title: 'core',
                nodes: [
                    { title: 'core', nodes: [], expanded: false, selected: false, tabIndex: -1, path: ['nodes', 0, 'nodes', 0] },
                    { title: 'shared', nodes: [], expanded: false, selected: false, tabIndex: -1, path: ['nodes', 0, 'nodes', 1] },
                    { title: 'features', nodes: [], expanded: false, selected: false, tabIndex: -1, path: ['nodes', 0, 'nodes', 2] }
                ],
                expanded: false,
                selected: false,
                tabIndex: -1,
                path: ['nodes', 0]
            }]
        };
        const result = addChildrens(path, childrensToAdd)(nodelist);
        expect(JSON.stringify(result)).toEqual(JSON.stringify(expectedNodelist));
    });
});
