import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-tree-node-list',
    template: `
  <ul>
    <li *ngFor="let n of nodes" style="list-style: none">
        <app-tree-node [node]="n"></app-tree-node>
    </li>
  </ul>
  `,
   changeDetection: ChangeDetectionStrategy.OnPush
})

export class TreeNodeListComponent {
    @Input() nodes;
    constructor() {
        console.log('constructor', 'TreeNodeListComponent');
    }
}

