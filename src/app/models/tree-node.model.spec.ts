import { addChildrens } from 'app/models/tree-node.model';

describe('TreeNodeModel', () => {
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
