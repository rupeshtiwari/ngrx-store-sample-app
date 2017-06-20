import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
@Component({
    selector: 'app-tree-node',
    template: `
    <div *ngIf="node">
    {{node.title}}
      <app-tree-nodes [nodes$]="nodes$" *ngIf="hasChildren"></app-tree-nodes>
    </div>
  `
})

export class TreeNodeComponent {
    @Input() node;
    get treeNodes() {
        return Observable.of(this.node.nodes);
    }
    get hasChildren() {
        return this.node.nodes.length > 0;
    }
}

