import { AppState, initialAppState } from './app-state';
import * as fromActions from '../actions/save';

export const reducer = (state = initialAppState, action) => {
    switch (action.type) {
        case fromActions.SAVE:
            return state;
        default:
            return state;
    }
}