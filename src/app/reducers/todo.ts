import { createSelector } from 'reselect';
import { Action, combineReducers } from '@ngrx/store';
import { append, prop, assoc, lensPath, over, lens, not, compose, evolve } from 'ramda';
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

export interface Todo {
    text: string;
    complete: boolean;
    path: Path;
}

export const reducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case fromActions.ADD_TODO:
            const appendNewTodo = (todos) => append(action.payload, todos);
            return over(lensPath(['todos']), appendNewTodo, state);
        case fromActions.TOGGLE_TODO:
            return over(lensPath(append('complete', action.payload)), not, state);
        default:
            return state;
    };
};

export const getTodos = (state: State) => state.todos;




