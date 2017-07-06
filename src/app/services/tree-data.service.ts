import { Injectable } from '@angular/core';
import * as R from 'ramda';

import { TreeNode, Path, getChildrens, getNodesWithoutChildrens } from 'app/models/tree-node.model';
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
                        },
                        {
                            title: 'Todo-Service'
                            , nodes: []
                            , expanded: false
                            , selected: false
                            , tabIndex: -1
                            , path: ['nodes', 0, 'nodes', 0, 'nodes', 1]
                        }]
                        , expanded: false
                        , selected: false
                        , tabIndex: -1
                        , path: ['nodes', 0, 'nodes', 0]
                    }
                ]
                , expanded: false
                , selected: false
                , tabIndex: -1
                , path: ['nodes', 0]
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
                    }
                ]
                , expanded: false
                , selected: false
                , tabIndex: -1
                , path: ['nodes', 1]
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
                    },
                    {
                        title: 'tree app'
                        , expanded: false
                        , tabIndex: -1
                        , selected: false
                        , path: ['nodes', 2, 'nodes', 1]
                        , nodes: []
                    }
                ]
                , expanded: false
                , selected: false
                , tabIndex: -1
                , path: ['nodes', 2]
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
}
