

import { Todo } from 'app/core/models/todo';

export interface State {
    todos: Todo[];
}

export const initialState = {
    todos: []
};


