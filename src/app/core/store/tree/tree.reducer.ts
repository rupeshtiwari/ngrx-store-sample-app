import { createSelector } from 'reselect';
import { Action, combineReducers } from '@ngrx/store';
import { compose, evolve, F } from 'ramda';
import * as fromActions from 'app/core/store/actions/tree.actions';
import {
    TreeNode, hasChildrens, unselectNode, selectNode,
    unfocusNode, focusNode, expandNode, replacePreviousSelectedPathWith,
    replacePreviousFocusedPathWith,
    addChildrens, initialState,
    SourceType, collapseNode
} from 'app/core/models/tree';
import { log } from 'app/core/services/logger.service';

export function reducer(state = initialState, action: Action) {
    switch (action.type) {
        case fromActions.SELECT_EXPAND: {
            if (!action.payload.hasChildrens) { return state; }
            const currentPath = action.payload.path;
            const previousPath = state.selectedPath;

            return compose(
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
            return compose(
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

            return compose(
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
            return evolve({ loading: F, nodes: () => action.payload }, state);

        default:
            return state;
    }
};



