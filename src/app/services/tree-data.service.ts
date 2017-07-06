import { Injectable } from '@angular/core';
import * as R from 'ramda';

import { TreeNode, Path } from 'app/models/tree-node.model';
import { log } from 'app/services/logger.service';
import { getNodesWithoutChild, getSelectedNodes } from 'app/reducers/tree-selectors';


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
        return getNodesWithoutChild(this.nodeList.nodes);
    }

    getNodes(path: Path): TreeNode[] {
        return R.compose(getNodesWithoutChild, getSelectedNodes(path))(this.nodeList);
    }
}
