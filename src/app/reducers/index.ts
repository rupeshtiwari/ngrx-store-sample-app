
import { compose } from '@ngrx/core';
import { storeLogger } from 'ngrx-store-logger/dist';
import { combineReducers } from '@ngrx/store';
import { createSelector } from 'reselect';
import { storeFreeze } from 'ngrx-store-freeze';

import * as fromTree from '../reducers/tree';
import * as fromTodos from '../reducers/todo';
import { AppState } from "app/reducers/app-state";

const reducers = {
    todos: fromTodos.reducer,
    tree: fromTree.reducer
};

export * from "app/reducers/app-state";

export const developmentReducer = compose(storeFreeze, storeLogger(), combineReducers)(reducers);

export function reducer(state, action) {
    return developmentReducer(state, action);
}
export const getAppState = (state:AppState) => state;

export const getTodosState = (state: AppState) => state.todos;
export const getAllTodos = createSelector(getTodosState, fromTodos.getTodos);

export const getTreeState = (state: AppState) => state.tree;
export const getAllNodes = createSelector(getTreeState, fromTree.getNodes);


