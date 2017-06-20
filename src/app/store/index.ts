
import { compose } from '@ngrx/core';
import { reducerTree, getNodes, TreeState } from 'app/store/reducer';
import { storeLogger } from 'ngrx-store-logger/dist';
import { combineReducers } from '@ngrx/store';
import { createSelector } from 'reselect';

const reducers = {
    treeState: reducerTree
};

export interface AppState {
    treeState: TreeState;
}

export const developmentReducer = compose(storeLogger(), combineReducers)(reducers);

export function reducer(state, action) {
    return developmentReducer(state, action);
}

export const getTreeState = (state: AppState) => state.treeState;

export const getTreeNodes = createSelector(getTreeState, getNodes);
