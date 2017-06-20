import { Action, combineReducers } from '@ngrx/store';
import { compose } from '@ngrx/core';
import { storeLogger } from 'ngrx-store-logger';

import * as fromActions from './actions';


export interface Node {
    title: string;
    expanded: boolean;
    selected: boolean;
    nodes: Node[];
}
export interface State {
    nodes: Node[];
}
export const initialState = {
    nodes: [
        {
            title: 'core'
            , nodes: []
            , expanded: false
            , selected: false
        },
        {
            title: 'shared'
            , nodes: []
            , expanded: false
            , selected: false
        },
        {
            title: 'features'
            , nodes: [
                {
                    title: 'find-book'
                    , expanded: false
                    , selected: false
                }
            ]
            , expanded: false
            , selected: false
        }

    ]
};

export const reducerTree = (state = initialState, action: Action) => {
    switch (action.type) {
        case fromActions.LOAD:
            return state;
        default:
            return state;
    }
};


const reducers = {
    tree: reducerTree
};

export const developmentReducer = compose(storeLogger(), combineReducers)(reducers);

export function reducer(state, action) {
    return developmentReducer(state, action);
}

