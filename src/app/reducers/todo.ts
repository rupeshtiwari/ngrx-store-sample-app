import { createSelector } from 'reselect';
import { Action, combineReducers } from '@ngrx/store';
import { compose } from '@ngrx/core';
import { storeLogger } from 'ngrx-store-logger';
import { append, prop, assoc, lensPath, over, lens } from 'ramda';
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
            return over(lensPath(['todos']), (todos) => append(action.payload, todos), state);
        default:
            return state;
    }
};

export const getTodos = (state: State) => state.todos;



