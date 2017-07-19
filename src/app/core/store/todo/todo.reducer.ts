import { createSelector } from 'reselect';
import { Action, combineReducers } from '@ngrx/store';
import {
    append, filter, prop, assoc, lensPath, over,
    propSatisfies, when, not, map, compose, evolve, __,
    identity, view, find, propEq
} from 'ramda';
import * as fromActions from '../actions/todo.actions';
import { initialState } from 'app/core/models/todo';


export function reducer(state = initialState, action: Action) {
    switch (action.type) {
        case fromActions.ADD_TODO:
            const appendNewTodo = (todos) => append(action.payload, todos);
            return over(lensPath(['todos']), appendNewTodo, state);
        case fromActions.TOGGLE_TODO:
            const toggleComplete = evolve({ complete: not });
            const isCurrentTodo = propSatisfies(x => x === action.payload, 'id');
            const toggleTodo = map(when(isCurrentTodo, toggleComplete));
            return over(lensPath(['todos']), toggleTodo, state);
        default:
            return state;
    };
};






