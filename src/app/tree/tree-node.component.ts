import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
@Component({
    selector: 'app-tree-node',
    template: `
    <div *ngIf="node">
    {{node.title}}
     
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TreeNodeComponent implements OnInit {
    @Input() node;
    ngOnInit() {
        console.log(`initializing ${this.node.title}`, this.node);
    }
    get treeNodes() {
        return Observable.of(this.node.nodes);
    }
    get hasChildren() {
        console.log(`${this.node.title} hasChildren: `, this.node.nodes.length > 0);
        return this.node.nodes.length > 0;
    }
}

