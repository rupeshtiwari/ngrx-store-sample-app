
import * as fromTree from '../reducers/tree';
import * as fromTodos from '../reducers/todo';

export interface AppState {
    todos: fromTodos.State;
    tree: fromTree.State;
}

export const initialAppState = {
    todos : fromTodos.initialState,
    tree : fromTree.initialState
}
