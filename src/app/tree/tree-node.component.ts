import { Component, Input, OnInit, ChangeDetectionStrategy, OnChanges, AfterViewInit } from '@angular/core';
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

export class TreeNodeComponent implements OnInit, OnChanges, AfterViewInit {
    @Input() node;
    constructor() {
        console.log('constructor', 'TreeNodeComponent');
    }
    ngOnInit() {
        console.log(`ngOnInit ${this.node.title}`, this.node);
    }
    ngAfterViewInit() {
        console.log('ngAfterViewInit', `${this.node.title}`);
    }
    ngOnChanges() {
        console.log('ngOnChanges', `${this.node.title}`);
    }
    get treeNodes() {
        return Observable.of(this.node.nodes);
    }
    get hasChildren() {
        console.log(`${this.node.title} hasChildren: `, this.node.nodes.length > 0);
        return this.node.nodes.length > 0;
    }

}

