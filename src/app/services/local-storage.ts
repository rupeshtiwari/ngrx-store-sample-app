
import { of } from 'rxjs/observable/of';
import { tap } from 'ramda';
import { initialAppState } from '../reducers/app-state';


export const getKey = () => 'ngrx-app-key';
export const save = (k, v) => of(localStorage.setItem(k, JSON.stringify(v)));

export const getState = (k) => JSON.parse(localStorage.getItem(k) || null) || initialAppState;

export const getAppState = () => getState(getKey());
export const saveAppState = (state) => save(getKey(), state);