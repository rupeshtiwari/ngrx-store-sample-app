import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { State } from 'app/reducer';

import * as fromActions from './actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tree$: Observable<State>;
  constructor(private store: Store<State>) {
    this.tree$ = store.select('tree');
    store.dispatch(fromActions.loadTree());
  }
}
