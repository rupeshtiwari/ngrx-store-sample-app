import { createSelector } from 'reselect';
import { Action, combineReducers } from '@ngrx/store';
import * as R from 'ramda';

import * as fromActions from '../actions/tree';
import { TreeNode } from "app/models/tree-node.model";
import { Path } from "app/reducers/todo";
const { log } = console;

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
};

export const reducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case fromActions.LOAD:
            return state;
        case fromActions.TOGGLE_NODE:

            const currentSelectedPath = action.payload;
            const currentSelectedLens = R.lensPath(currentSelectedPath);
            const previousSelectedPath = R.prop('selectedPath', state);

            const toggleExpand = R.evolve({
                expanded: R.not,
                selected: () => true,
                tabIndex: () => 0
            });

            const hasChildNodes = R.compose(
                R.lt(0),
                R.length,
                R.view(R.lensPath(R.append('nodes', currentSelectedPath)))
            );

            const toggleSelection = (path) => R.compose(
                R.over(R.lensPath(R.append('selected', path)), R.not),
                R.over(R.lensPath(R.append('tabIndex', path)), (v) => v === -1 ? 0 : -1)
            );
            const toggleExpandCurrentSelectedNode = R.over(currentSelectedLens, toggleExpand);
            const replaceOldSelectedPath = R.assoc('selectedPath', currentSelectedPath);
            const toggleExpandNode = R.ifElse(hasChildNodes, toggleExpandCurrentSelectedNode,
                toggleSelection(currentSelectedPath));
            const hasPreviousSelectedNode = R.compose(R.tap(log), R.not, R.isEmpty, R.prop('selectedPath'));
            const toggle = R.compose(
                R.compose(toggleExpandNode, replaceOldSelectedPath),
                R.when(
                    hasPreviousSelectedNode,
                    toggleSelection(previousSelectedPath)
                )
            );
            return toggle(state);
        default:
            return state;
    }
};

export const getNodes = (state: State) => state.nodes;

