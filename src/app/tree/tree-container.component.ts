import { Component, Input, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as treeActions from 'app/core/store/actions/tree.actions';
import * as fromRoot from 'app/core/store';
import { TreeNode } from 'app/core/models/tree';
import { TreeEvents } from 'app/tree/tree-events';
import { Subject } from 'rxjs/Subject';

@Component({
    selector: 'app-tree-container',
    template: `
    
    <fieldset tabindex="-1">
        <legend >Aria Compliant Tree View</legend>
            <div>
                <button class="btn btn-success"  (click)="onLoadTreeClick$.next()">Load Tree</button>
            </div>
            <div >
                <app-tree-node-list  [nodes]="allNodes$|async"  role="tree">
                </app-tree-node-list>
            </div>
    </fieldset>
  `,
    changeDetection: ChangeDetectionStrategy.OnPush
    , styles: [`
 :focus { outline: none }
        `]
})

export class TreeContainerComponent {
    allNodes$: Observable<TreeNode[]>;
    onLoadTreeClick$ = new Subject<any>();
    _onLoadTreeClick$: Observable<any>;

    constructor(
        private store: Store<fromRoot.State>,
        private treeEvents: TreeEvents
    ) {
        this.allNodes$ = store.select(fromRoot.getAllNodes);
        treeEvents.selectExpand$.subscribe(this.onSelectExpand.bind(this));
        treeEvents.selectCollapse$.subscribe(this.onSelectCollapse.bind(this));
        this.onLoadTreeClick$.subscribe(() => this.store.dispatch(treeActions.loadTree()));
    }

    onSelectExpand({ path, hasChildrens }): void {
        this.store.dispatch(treeActions.selectExpand(path, hasChildrens));
    }

    onSelectCollapse({ path }): void {
        this.store.dispatch(treeActions.selectCollapse(path));
    }
}

