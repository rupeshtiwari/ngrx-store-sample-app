import { createSelector } from 'reselect';
import { Action, combineReducers } from '@ngrx/store';
import * as R from 'ramda';

import * as fromActions from '../actions/tree';
import {
    TreeNode, hasChildrens, unselectNode, selectNode,
    unfocusNode, focusNode, expandNode, replacePreviousSelectedPathWith,
    replacePreviousFocusedPathWith,
    addChildrens,
    SourceType, Path, collapseNode
} from 'app/models/tree-node.model';

const { log } = console;

export interface State {
    loading: boolean;
    selectedPath?: Path;
    nodes: TreeNode[];
}

export const initialState = {
    loading: false,
    selectedPath: [],
    nodes: [],
    focusedPath: []
};

export const reducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case fromActions.SELECT_EXPAND: {
            if (!action.payload.hasChildrens) { return state; }
            const currentPath = action.payload.path;
            const previousPath = state.selectedPath;

            return R.compose(
                replacePreviousFocusedPathWith(currentPath),
                replacePreviousSelectedPathWith(currentPath),
                expandNode(currentPath),
                focusNode(currentPath),
                unfocusNode(previousPath),
                selectNode(currentPath),
                unselectNode(previousPath)
            )(state);
        }
        case fromActions.SELECT_COLLAPSE: {
            const currentPath = action.payload.path;
            const previousPath = state.selectedPath;
            return R.compose(
                replacePreviousFocusedPathWith(currentPath),
                replacePreviousSelectedPathWith(currentPath),
                collapseNode(currentPath),
                focusNode(currentPath),
                unfocusNode(previousPath),
                selectNode(currentPath),
                unselectNode(previousPath))(state);
        }
        case fromActions.SELECT_EXPAND_ADD_CHILDREN: {
            const currentPath = action.payload.path;
            const previousPath = state.selectedPath;

            return R.compose(
                addChildrens(currentPath, action.payload.nodes),
                replacePreviousFocusedPathWith(currentPath),
                replacePreviousSelectedPathWith(currentPath),
                expandNode(currentPath),
                focusNode(currentPath),
                unfocusNode(previousPath),
                selectNode(currentPath),
                unselectNode(previousPath)
            )(state);
        }
        case fromActions.LOAD:
            return state;

        case fromActions.LOAD_SUCCESS:
            return R.evolve({ loading: R.F, nodes: () => action.payload }, state);

        default:
            return state;
    }
};

export * from './tree-selectors';



