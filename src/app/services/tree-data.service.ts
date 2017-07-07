import { Injectable } from '@angular/core';
import * as R from 'ramda';

import { TreeNode, Path, getChildrens, getNodesWithoutChildrens, SourceType } from 'app/models/tree-node.model';
import { log } from 'app/services/logger.service';

@Injectable()
export class TreeDataService {
    private nodeList = {
        nodes: [
            {
                title: 'core'
                , nodes: [
                    {
                        title: 'service'
                        , nodes: [{
                            title: 'Tree-Service'
                            , nodes: []
                            , expanded: false
                            , selected: false
                            , tabIndex: -1
                            , path: ['nodes', 0, 'nodes', 0, 'nodes', 0]
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
                                    , tabIndex: -1
                                    , path: ['nodes', 0, 'nodes', 0, 'nodes', 1, 'nodes', 0]
                                    , type: SourceType.DOCUMENT
                                }

                            ]
                            , expanded: false
                            , selected: false
                            , tabIndex: -1
                            , path: ['nodes', 0, 'nodes', 0, 'nodes', 1]
                            , type: SourceType.FOLDER
                        },
                        {
                            title: 'Todo-Service'
                            , nodes: []
                            , expanded: false
                            , selected: false
                            , tabIndex: -1
                            , path: ['nodes', 0, 'nodes', 0, 'nodes', 2]
                            , type: SourceType.DOCUMENT
                        }]
                        , expanded: false
                        , selected: false
                        , tabIndex: -1
                        , path: ['nodes', 0, 'nodes', 0]
                        , type: SourceType.FOLDER
                    }
                ]
                , expanded: false
                , selected: false
                , tabIndex: -1
                , path: ['nodes', 0]
                , type: SourceType.FOLDER
            },
            {
                title: 'shared'
                , nodes: [
                    {
                        title: 'pipes'
                        , nodes: []
                        , expanded: false
                        , selected: false
                        , tabIndex: -1
                        , path: ['nodes', 1, 'nodes', 0]
                        , type: SourceType.DOCUMENT
                    }
                ]
                , expanded: false
                , selected: false
                , tabIndex: -1
                , path: ['nodes', 1]
                , type: SourceType.FOLDER
            },
            {
                title: 'features'
                , nodes: [
                    {
                        title: 'todo app'
                        , expanded: false
                        , tabIndex: -1
                        , selected: false
                        , path: ['nodes', 2, 'nodes', 0]
                        , nodes: []
                        , type: SourceType.DOCUMENT
                    },
                    {
                        title: 'tree app'
                        , expanded: false
                        , tabIndex: -1
                        , selected: false
                        , path: ['nodes', 2, 'nodes', 1]
                        , nodes: []
                        , type: SourceType.DOCUMENT
                    }
                ]
                , expanded: false
                , tabIndex: -1
                , selected: false
                , path: ['nodes', 2]
                , type: SourceType.FOLDER
            }

        ]
    };

    constructor() { }

    get parentNodes() {
        return getNodesWithoutChildrens(this.nodeList.nodes);
    }

    getNodesWithoutChildrens(path: Path): TreeNode[] {
        return R.compose(getNodesWithoutChildrens, getChildrens(path))(this.nodeList);
    }
    getNodesWithoutChildrens1(path: Path): any {
        const nodelist = R.compose(getNodesWithoutChildrens, getChildrens(path))(this.nodeList);
        return { path, nodelist };
    }
}
