import { createSelector } from 'reselect';
import { Action, combineReducers } from '@ngrx/store';
import { append, prop, assoc, lensPath, over, lens, not, compose, curry } from 'ramda';

import * as fromActions from '../actions/tree';

export type Path = any[];

export interface TreeNode {
    title: string;
    expanded: boolean;
    selected: boolean;
    nodes: TreeNode[];
}

export interface State {
    loading: boolean;
    selectedPath?: Path;
    nodes: TreeNode[];
}

export const initialState = {
    loading: false,
    selectedPath: [],
    nodes: [
        {
            title: 'core'
            , nodes: [
                {
            title: 'service'
            , nodes: []
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
            , path: ['nodes', 1, 'nodes', 0 ]
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
};

export const reducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case fromActions.LOAD:
            return state;
        case fromActions.TOGGLE_NODE:
    
            const toggle = compose(
                over(lensPath(append('expanded', action.payload)), not),
                over(lensPath(append('selected', action.payload)), not),
                over(lensPath(append('tabIndex', action.payload)), (v) => v === -1 ? 0 : -1)
            );
            return toggle(state);
        default:
            return state;
    }
};

export const getNodes = (state: State) => state.nodes;

