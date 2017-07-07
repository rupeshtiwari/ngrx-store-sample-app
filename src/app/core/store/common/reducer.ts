import { compose } from '@ngrx/core';
import { storeFreeze } from 'ngrx-store-freeze';
import { storeLogger } from 'ngrx-store-logger/dist';
import { combineReducers } from '@ngrx/store';

import * as todoReducer from 'app/core/store/todo/todo.reducer';
import * as treeReducer from 'app/core/store/tree/tree.reducer';
import * as saveReducer from 'app/core/store/save/save.reducer';

import { restoreStateReducer } from 'app/core/store/restore/restore.reducer';


const reducers = {
    todos: todoReducer.reducer,
    tree: treeReducer.reducer,
    save: saveReducer.reducer
};

export const developmentReducer = compose(
    restoreStateReducer,
    storeFreeze,
    storeLogger(),
    combineReducers)(reducers);

export function reducer(state, action) {
    return developmentReducer(state, action);
}


