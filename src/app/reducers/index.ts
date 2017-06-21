
import { compose } from '@ngrx/core';
import { storeLogger } from 'ngrx-store-logger/dist';
import { combineReducers } from '@ngrx/store';
import { createSelector } from 'reselect';
import { storeFreeze } from 'ngrx-store-freeze';

import { reducerTree, getNodes, TreeState } from '../reducers/tree';
import * as fromTodos from '../reducers/todo';

const reducers = {
    todos: fromTodos.reducer,
};

export interface AppState {
    todos: fromTodos.State;
}

export const developmentReducer = compose(storeFreeze, storeLogger(), combineReducers)(reducers);

export function reducer(state, action) {
    return developmentReducer(state, action);
}

export const getTodosState = (state: AppState) => state.todos;

export const getAllTodos = createSelector(getTodosState, fromTodos.getTodos);



