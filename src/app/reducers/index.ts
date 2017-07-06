
import { compose } from '@ngrx/core';
import { storeLogger } from 'ngrx-store-logger/dist';
import { combineReducers } from '@ngrx/store';
import { createSelector } from 'reselect';
import { storeFreeze } from 'ngrx-store-freeze';

import * as fromTree from '../reducers/tree';
import * as fromTodos from '../reducers/todo';
import { AppState } from 'app/reducers/app-state';
import * as ts from '../services/local-storage';
import * as R from 'ramda';
const reducers = {
    todos: fromTodos.reducer,
    tree: fromTree.reducer
};

import { Action, Dispatcher } from '@ngrx/store';
import * as appActions from '../actions/save';

export const initialStateReducer = (_initialState: any) => (reducer: any) => {
    const initialState = typeof _initialState === 'function'
        ? _initialState()
        : _initialState;

    return (state: any, action: Action) => {
        if (action.type === Dispatcher.INIT) {
            state = initialState;
        }

        return reducer(state, action);
    };
};


export const restoreStateReducer = (reducer: any) => {
    return (state: any, action: Action) => {
        if (action.type === appActions.APP_STATE_AVAILABLE) {
            state = action.payload;
        }
        return reducer(state, action);
    };
};




// export const initialStateReducer = R.curry((_initialState: any, reducer: any) => {
//     const initialState = typeof _initialState === 'function'
//         ? _initialState()
//         : _initialState;

//     return (state: any, action: Action) => {
//         if (action.type === appActions.APP_STATE_AVAILABLE) {
//             state = action.payload;
//         }

//         return reducer(state, action);
//     };
// });


export * from 'app/reducers/app-state';

export const developmentReducer = compose(
    restoreStateReducer,
    storeFreeze,
    storeLogger(),
    combineReducers)(reducers);

export function reducer(state, action) {
    return developmentReducer(state, action);
}
export const getAppState = (state: AppState) => state;

export const getTodosState = (state: AppState) => state.todos;
export const getAllTodos = createSelector(getTodosState, fromTodos.getTodos);

export const getTreeState = (state: AppState) => state.tree;
export const getAllNodes = createSelector(getTreeState, fromTree.getNodes);


