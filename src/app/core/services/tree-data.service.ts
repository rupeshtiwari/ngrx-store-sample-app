import { Injectable } from '@angular/core';
import { compose } from 'ramda';
import { TreeNode, getChildrens, getNodesWithoutChildrens, SourceType } from 'app/core/models/tree';
import { log } from 'app/core/services/logger.service';
import { Path } from 'app/core/models/common';

@Injectable()
export class TreeDataService {
    private nodeList = {
        nodes: [
            {
                title: 'core'
                , nodes: [
                    {
                        title: 'service'
                        , nodes: [
                            {
                                title: 'Tree-Service'
                                , nodes: []
                                , expanded: false
                                , selected: false
                                , focused: false
                                , tabIndex: -1
                                , path: ['nodes', 0, 'nodes', 0, 'nodes', 0]
                                , key: 'nodes0nodes0nodes0'
                                , level: 3
                                , type: SourceType.DOCUMENT
                            },
                            {
                                title: 'Search'
                                , nodes: [
                                    {
                                        title: 'Index.ts'
                                        , nodes: []
                                        , expanded: false
                                        , selected: false
                                        , focused: false
                                        , tabIndex: -1
                                        , level: 4
                                        , path: ['nodes', 0, 'nodes', 0, 'nodes', 1, 'nodes', 0]
                                        , key: 'nodes0nodes0nodes1nodes0'
                                        , type: SourceType.DOCUMENT
                                    }

                                ]
                                , expanded: false
                                , selected: false
                                , focused: false
                                , tabIndex: -1
                                , path: ['nodes', 0, 'nodes', 0, 'nodes', 1]
                                , key: 'nodes0nodes0nodes1'
                                , level: 3
                                , type: SourceType.FOLDER
                            },
                            {
                                title: 'Todo-Service'
                                , nodes: []
                                , expanded: false
                                , selected: false
                                , focused: false
                                , tabIndex: -1
                                , level: 3
                                , path: ['nodes', 0, 'nodes', 0, 'nodes', 2]
                                , key: 'nodes0nodes0nodes2'
                                , type: SourceType.DOCUMENT
                            }]
                        , expanded: false
                        , selected: false
                        , focused: false
                        , tabIndex: -1
                        , path: ['nodes', 0, 'nodes', 0]
                        , key: 'nodes0nodes0'
                        , level: 2
                        , type: SourceType.FOLDER
                    }
                ]
                , expanded: false
                , selected: false, focused: false
                , tabIndex: -1
                , path: ['nodes', 0]
                , key: 'nodes0'
                , level: 1
                , type: SourceType.FOLDER
            },
            {
                title: 'shared'
                , nodes: [
                    {
                        title: 'pipes'
                        , nodes: []
                        , expanded: false
                        , selected: false, focused: false
                        , tabIndex: -1
                        , path: ['nodes', 1, 'nodes', 0]
                        , key: 'nodes1nodes0'
                        , level: 2
                        , type: SourceType.DOCUMENT
                    }
                ]
                , expanded: false
                , selected: false, focused: false
                , tabIndex: -1
                , path: ['nodes', 1]
                , key: 'nodes2nodes0'
                , level: 1
                , type: SourceType.FOLDER
            },
            {
                title: 'features'
                , nodes: [
                    {
                        title: 'todo app'
                        , expanded: false
                        , tabIndex: -1
                        , selected: false, focused: false
                        , path: ['nodes', 2, 'nodes', 0]
                        , key: 'nodes2nodes0'
                        , level: 2
                        , nodes: [
                            {
                                title: 'todo.component.ts'
                                , expanded: false
                                , tabIndex: -1
                                , selected: false
                                ,
                                focused: false
                                , path: ['nodes', 2, 'nodes', 0, 'nodes', 0]
                                , key: 'nodes2nodes0nodes0'
                                , nodes: []
                                , level: 3
                                , type: SourceType.DOCUMENT
                            }

                        ]
                        , type: SourceType.FOLDER
                    },
                    {
                        title: 'tree app'
                        , expanded: false
                        , tabIndex: -1
                        , selected: false, focused: false
                        , path: ['nodes', 2, 'nodes', 1]
                        , key: 'nodes2nodes1'
                        , nodes: []
                        , level: 2
                        , type: SourceType.DOCUMENT
                    }
                ]
                , expanded: false
                , tabIndex: -1
                , selected: false, focused: false
                , path: ['nodes', 2]
                , key: 'nodes2'
                , level: 1
                , type: SourceType.FOLDER
            }

        ]
    };

    constructor() { }

    get parentNodes() {
        return getNodesWithoutChildrens(this.nodeList.nodes);
    }

    getNodesWithoutChildrens(path: Path): TreeNode[] {
        return compose(getNodesWithoutChildrens, getChildrens(path))(this.nodeList);
    }
    getNodesWithoutChildrens1(path: Path): any {
        const nodelist = compose(getNodesWithoutChildrens, getChildrens(path))(this.nodeList);
        return { path, nodelist };
    }
}
