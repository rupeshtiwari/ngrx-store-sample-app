import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as saveActions from 'app/core/store/actions/save.actions';
import * as fromRoot from 'app/core/store';
import { getAppState } from 'app/core/services/local-storage.service';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/withLatestFrom';
import { State } from 'app/core/models/app.state';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  appState: fromRoot.State;
  stateFromStore: any;
  onSave$: Subject<any> = new Subject<any>();
  appState$: Observable<State>;
  loading$ : Observable<boolean>;

  constructor(
    private store: Store<fromRoot.State>
  ) {
    const key = ''; // get id from router;
    this.appState$ = store.select(fromRoot.getAppState);
    this.loading$ = store.select(fromRoot.getSaveStateLoading);
    this.onSave$.withLatestFrom(this.appState$).subscribe(([event, appState]) => this.saveAppState(appState));
    store.dispatch(saveActions.restoreAppState(key));
  }
  saveAppState(appState) {
    this.store.dispatch(saveActions.saveAppState(appState));
  }
}

