import { Component, Input, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromActions from '../actions/tree';
import * as fromRoot from '../reducers';
import { TreeNode } from '../models/tree-node.model';

import { TreeEvents } from 'app/tree/tree-events';

@Component({
    selector: 'app-tree-container',
    template: `
    <div class="container">
    <fieldset>
    <h2 id="ta">Tree App</h2>
    <div >
    <app-tree-node-list  [nodes]="allNodes$|async"  role="tree" aria-labelledby="ta">
    </app-tree-node-list>
    </div>
    </fieldset>
    </div>
  `,
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class TreeContainerComponent implements OnInit {
    allNodes$: Observable<TreeNode[]>;
    constructor(
        private store: Store<fromRoot.AppState>,
        private treeEvents: TreeEvents
    ) {
        this.allNodes$ = store.select(fromRoot.getAllNodes);
        treeEvents.selectExpand$.subscribe(this.onSelectExpand.bind(this));
        treeEvents.selectCollapse$.subscribe(this.onSelectCollapse.bind(this));
    }

    onSelectExpand({ path, hasChildrens }): void {
        this.store.dispatch(fromActions.selectExpand(path, hasChildrens));
    }

    onSelectCollapse({ path }): void {
        this.store.dispatch(fromActions.selectCollapse(path));
    }
    
    ngOnInit() {
        this.store.dispatch(fromActions.loadTree());
    }
}

