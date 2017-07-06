

import { Injectable } from "@angular/core/src/core";
import { TreeNode } from "app/models/tree-node.model";

@Injectable()
export class TreeDataService {
  constructor() { }
  private nodes = [
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
      , tabIndex: -1
      , selected: false
      , path: ['nodes', 2]
    }

  ]
  parentNodes() {
  //  R.project([],this.nodes)
  }
  createNode(values:Object) {
   /// return new TreeNode
  }
}