import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromActions from '../actions/tree';
import { TreeNode } from '../reducers/tree';
import * as fromRoot from '../reducers';

@Component({
    selector: 'app-tree-container',
    template: `
    <div class="container">
    <fieldset>
    <legend>TreeView App</legend>
    <app-tree-node-list>
    </app-tree-node-list>
    </fieldset>
    </div>
  `,
   changeDetection: ChangeDetectionStrategy.OnPush
})

export class TreeContainerComponent {
    nodes$ : Observable<TreeNode[]>;
   constructor(private store: Store<fromRoot.AppState>) {
        console.log('initialized', 'TreeContainerComponent');
        this.nodes$ = store.select(fromRoot.getAllNodes);
    }
}

