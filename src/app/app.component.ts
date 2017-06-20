import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromActions from './store/actions';
import * as fromRoot from './store';
import { TreeNode } from 'app/store/reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  nodes$: Observable<TreeNode[]>;
  constructor(private store: Store<fromRoot.AppState>) {
    this.nodes$ = store.select(fromRoot.getTreeNodes);
    store.dispatch(fromActions.loadTree());
  }
}

