import { getAppState } from 'app/core/services/local-storage.service';
import { initialState } from 'app/core/models/app.state';

describe('getappstate', () => {
    it('can return intialappstate if nothing comes from server', () => {
        const state = getAppState();
        expect(state).toEqual(initialState);
    });
});
