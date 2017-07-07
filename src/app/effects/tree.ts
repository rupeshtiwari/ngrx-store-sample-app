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

import { save, LocalStorageService } from '../services';
import * as fromSave from '../actions/save';
import { saveAppState } from '../services/local-storage';
import * as fromTreeActions from 'app/actions/tree';
import * as R from 'ramda';
import { getAppState } from 'app/reducers';
import { TreeDataService } from 'app/services/tree-data.service';

@Injectable()
export class TreeEffects {
  @Effect()
  loadTree$: Observable<Action> = this.actions$
    .ofType(fromTreeActions.LOAD)
    .switchMap(() => of(this.treeDataService.parentNodes))
    .map((nodelist) => fromTreeActions.loadTreeSuccess(nodelist))
    .catch((e) => of(fromSave.saveFail(e)));

  @Effect()
  addNodes$: Observable<Action> = this.actions$
    .ofType(fromTreeActions.SELECT_EXPAND)
    .map(toPayload)
    .switchMap(({ path, hasChildrens }) => {
      if (hasChildrens) { return empty(); }
      return of(this.treeDataService.getNodesWithoutChildrens(path))
        .map((nodelist) => fromTreeActions.selectExpandAddChildren(path, nodelist));

    })

    .catch((e) => of(fromSave.saveFail(e)));

  constructor(
    private actions$: Actions, private treeDataService: TreeDataService
  ) { }
}
