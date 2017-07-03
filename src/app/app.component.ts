import { AppState } from './reducers/app-state';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromActions from './actions/save';
import * as fromRoot from './reducers';
import { getAppState } from './services/local-storage';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  appState: any
  stateFromStore: any
  constructor(
    private store: Store<AppState>
  ) {
    store.select(fromRoot.getAppState).subscribe((s) => {
      console.log('appstate', s);
      this.appState = s;
    });
  }

  fetch() {
    this.stateFromStore = getAppState();
  }

  save() {
    this.store.dispatch(fromActions.save(this.appState));
  }
}

