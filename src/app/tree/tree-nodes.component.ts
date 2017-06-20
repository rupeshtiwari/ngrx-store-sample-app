import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-tree-nodes',
    template: `
  <ul>
    <li *ngFor="let n of nodes$ | async">
        <app-tree-node [node]="n"></app-tree-node>
    </li>
  </ul>
  `
})

export class TreeNodesComponent {
    @Input() nodes$;
}

