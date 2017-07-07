import * as fromSave from '../actions/save.actions';
import { initialState } from 'app/core/models/common/save.state';
import { T, F, not, evolve } from 'ramda';

export function reducer(state = initialState, action) {
    switch (action.type) {
        case fromSave.SAVE_APP_STATE:
            return evolve({ loading: T }, state);
        case fromSave.SAVE_APP_STATE_SUCCESS:
            return evolve({ loading: F }, state);
        default:
            return state;
    }
}
