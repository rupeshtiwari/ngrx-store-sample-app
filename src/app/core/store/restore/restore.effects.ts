import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/takeUntil';
import { Injectable } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Action, Dispatcher } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { empty } from 'rxjs/observable/empty';
import { of } from 'rxjs/observable/of';
import * as R from 'ramda';

import * as fromSave from '../actions/save.actions';
import { LocalStorageService } from 'app/core/services/local-storage.service';
import * as appActions from 'app/core/store/actions/save.actions';

@Injectable()
export class RestoreEffects {
  @Effect()
  restore$: Observable<Action> = this.actions$
    .ofType(appActions.RESTORE_APP_STATE)
    .map(toPayload)
    .switchMap((key) => this.localStorageService.getAppState(key))
    .map((s) => appActions.restoreAppStateSuccess(s));
  constructor(
    private actions$: Actions, private localStorageService: LocalStorageService
  ) { }
}
