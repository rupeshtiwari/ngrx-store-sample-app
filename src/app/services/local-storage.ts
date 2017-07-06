
import { of } from 'rxjs/observable/of';
import { tap } from 'ramda';
import { initialAppState } from '../reducers/app-state';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';


export function getKey() { return 'ngrx-app-key'; }
export const save = (k, v) => of(localStorage.setItem(k, JSON.stringify(v)));

export function getState(k) {
  return JSON.parse(localStorage.getItem(k) || null) || initialAppState;
}

export function getAppState() { return getState(getKey()); }
export const saveAppState = (state) => save(getKey(), state);


@Injectable()
export class LocalStorageService {
  getAppState() {
    return Observable.of(getState(getKey()));
  }
  saveAppState(state) {
    return save(getKey(), state);
  }
}
