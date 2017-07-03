import { getAppState } from './local-storage';
import { initialAppState } from '../reducers/app-state';

describe('getappstate',()=>{
    it('can return intialappstate if nothing comes from server',()=>{
        const state =getAppState();
        expect(state).toEqual(initialAppState);
    })
})