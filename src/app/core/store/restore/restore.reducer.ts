import { Action, Dispatcher } from '@ngrx/store';
import * as appActions from '../actions/save.actions';
import { merge } from 'ramda';
import { initialState } from '../../models/app.state';

export const restoreStateReducer = (reducer: any) => {
    return (state: any, action: Action) => {
        if (!action) { return; }
        if (action.type === appActions.RESTORE_APP_STATE_SUCCESS && state) {
            state = merge(state, action.payload);
        }
        return reducer(state, action);
    };
};

// export const reducer = (state= initialState, action) => {
//     switch (action.type) {
//         case appActions.RESTORE_APP_STATE_SUCCESS:
//             return merge(state, action.payload);
//         default:
//             return state;
//     }
// };


