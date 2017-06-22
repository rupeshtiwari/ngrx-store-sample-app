import { Component, Input, ChangeDetectionStrategy, OnInit } from '@angular/core';
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
    <legend>Tree App</legend>
    <app-tree-node-list [nodes]="nodes$|async">
    </app-tree-node-list>
    </fieldset>
    </div>
  `,
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class TreeContainerComponent implements OnInit {
    nodes$: Observable<TreeNode[]>;
    constructor(private store: Store<fromRoot.AppState>) {
        console.log('initialized', 'TreeContainerComponent');
        this.nodes$ = store.select(fromRoot.getAllNodes);
    }
    ngOnInit() {
        this.store.dispatch(fromActions.loadTree());
    }
}

