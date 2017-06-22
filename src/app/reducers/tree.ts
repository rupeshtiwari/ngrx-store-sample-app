import { createSelector } from 'reselect';
import { Action, combineReducers } from '@ngrx/store';
import { compose } from '@ngrx/core';
import { storeLogger } from 'ngrx-store-logger';

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
            , nodes: []
            , expanded: false
            , selected: false
            , path: ['nodes', 0]
        },
        {
            title: 'shared'
            , nodes: []
            , expanded: false
            , selected: false
            , path: ['nodes', 1]
        },
        {
            title: 'features'
            , nodes: [
                {
                    title: 'find-book'
                    , expanded: false
                    , selected: false
                    , path: ['nodes', 2, 'nodes', 0]
                }
            ]
            , expanded: false
            , selected: false
            , path: ['nodes', 2]
        }

    ]
};

export const reducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case fromActions.LOAD:
            return state;
        default:
            return state;
    }
};

export const getNodes = (state: State) => state.nodes;

