import { Component, Input, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromActions from '../actions/tree';
import { TreeNode } from '../reducers/tree';
import * as fromRoot from '../reducers';
import { TreeEvents } from 'app/tree/tree-events';

@Component({
    selector: 'app-tree-container',
    template: `
    <div class="container">
    <fieldset>
    <h2 id="ta">Tree App</h2>
    <div >
    <app-tree-node-list  [nodes]="nodes$|async"  role="tree" aria-labelledby="ta">
    </app-tree-node-list>
    </div>
    </fieldset>
    </div>
  `,
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class TreeContainerComponent implements OnInit {
    nodes$: Observable<TreeNode[]>;
    constructor(private store: Store<fromRoot.AppState>, private treeEvents: TreeEvents) {
        console.log('initialized', 'TreeContainerComponent');
        this.nodes$ = store.select(fromRoot.getAllNodes);
        treeEvents.toggle$.subscribe(this.onToggle.bind(this));
    }
    onToggle(path): void {
        this.store.dispatch(fromActions.toggleNode(path));
    }
    ngOnInit() {
        this.store.dispatch(fromActions.loadTree());
    }
}

