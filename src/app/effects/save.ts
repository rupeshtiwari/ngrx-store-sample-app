import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/takeUntil';
import { Injectable } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { empty } from 'rxjs/observable/empty';
import { of } from 'rxjs/observable/of';

import { save } from '../services';
import * as fromSave from '../actions/save';
import { saveAppState } from '../services/local-storage';

import  * as R from 'ramda';

@Injectable()
export class SaveEffects {

  @Effect()
  save$: Observable<Action> = this.actions$
    .ofType(fromSave.SAVE)
    .map(toPayload)
    .switchMap(state => {
      return saveAppState(state)
        .map((o) => fromSave.saveComplete(o))
        .catch((e) => of(fromSave.saveFail(e)));
    });

  constructor(
    private actions$: Actions
  ) { }
}