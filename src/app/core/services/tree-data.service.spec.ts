import { TreeDataService } from 'app/core/services/tree-data.service';

describe('tree data service', () => {
    const dataService = new TreeDataService();

    it('can return parent nodes', () => {
        const expectedNodes = [
            { title: 'core', nodes: [], expanded: false, selected: false, tabIndex: -1, path: ['nodes', 0] },
            { title: 'shared', nodes: [], expanded: false, selected: false, tabIndex: -1, path: ['nodes', 1] },
            { title: 'features', nodes: [], expanded: false, selected: false, tabIndex: -1, path: ['nodes', 2] }
        ];
        expect(JSON.stringify(dataService.parentNodes)).toEqual(JSON.stringify(expectedNodes));
    });

    it('can return nodes by path', () => {
        const path = ['nodes', 0];
        const expectedNodes = [
            {
                title: 'service'
                , nodes: []
                , expanded: false
                , selected: false
                , tabIndex: -1
                , path: ['nodes', 0, 'nodes', 0]
            }
        ];
        expect(JSON.stringify(dataService.getNodesWithoutChildrens(path))).toEqual(JSON.stringify(expectedNodes));
    });
});

