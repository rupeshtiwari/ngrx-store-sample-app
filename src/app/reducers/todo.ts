import { createSelector } from 'reselect';
import { Action, combineReducers } from '@ngrx/store';
import { compose } from '@ngrx/core';
import { storeLogger } from 'ngrx-store-logger';
import * as R from 'ramda';
import * as fromActions from '../actions/todo';

export type Path = any[];

export interface Todo {
    text: string;
    selected: boolean;
    completed: boolean;
}

export interface State {
    todos: Todo[];
}

export const initialState = {
    todos: []
};

export const reducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case fromActions.ADD_TODO:
            return R.append(action.payload, state);
        default:
            return state;
    }
};

export const getTodos = function (state: State) { debugger; return state.todos };



