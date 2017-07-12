import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/observable/timer';

import { State } from 'app/core/models/app.state';
import * as saveActions from 'app/core/store/actions/save.actions';
import * as fromRoot from 'app/core/store';
import { getAppState } from 'app/core/services/local-storage.service';

@Component({
    selector: 'app-auto-save',
    template: ` <footer>
        <div>
          <button class="btn btn-danger" (click)="onSave$.next($event)">Save State</button>
          <div *ngIf="loading$|async">Saving...</div>
        </div>
      </footer>
      `
})

export class AutoSaveContainerComponent implements OnDestroy {
    appState: fromRoot.State;
    stateFromStore: any;
    onSave$: Subject<any> = new Subject<any>();
    appState$: Observable<State>;
    loading$: Observable<boolean>;
    timer$: any;
    _onSave$: any;
    constructor(
        private route: ActivatedRoute,
        private store: Store<fromRoot.State>
    ) {
        this.appState$ = store.select(fromRoot.getAppState);
        this.loading$ = store.select(fromRoot.getSaveStateLoading);
        this._onSave$ = this.onSave$.withLatestFrom(this.appState$).subscribe(([event, appState]) => this.saveAppState(appState));
        this.timer$ = Observable.timer(0, 100000).withLatestFrom(this.appState$).subscribe(([t, s]) => this.saveAppState(s));
    }
    saveAppState(appState) {
        this.store.dispatch(saveActions.saveAppState(appState));
    }
    ngOnDestroy() {
        if (this._onSave$) {
            this._onSave$.unsubscribe();
        }
        if (this.timer$) {
            this.timer$.unsubscrbe();
        }
    }
}


