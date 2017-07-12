import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { TreeNode } from 'app/core/models/tree';


@Component({
    selector: 'app-tree-node-list',
    template: `
  <ul>
    <li *ngFor="let n of nodes; trackBy:getNodeId" style="list-style: none" role="presentation">
        <app-tree-node [node]="n"></app-tree-node>
    </li>
  </ul>
  `,
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class TreeNodeListComponent {
    @Input() nodes;
    constructor() {
    }
    getNodeId(index, node: TreeNode) {
        return node.key;
    }
}

