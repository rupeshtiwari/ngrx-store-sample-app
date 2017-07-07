import { Component, Input, ChangeDetectionStrategy, OnChanges, AfterViewInit, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Path } from 'app/core/models/common';

@Component({
    selector: 'app-todo',
    template: `
    <li>
    <span [ngClass]="todo.complete?'complete':'pending'">
    {{todo.text}} - 
    {{todo.complete?'complete':'pending'}}
    </span>
             <button class="btn btn-warning" (click)="toggleTodo.emit(todo.id)">Toggle</button>
             </li>
  `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [`
    .complete { text-decoration: line-through;color:green} 
    .pending {text-decoration:''; color:red;}`
    ]
})

export class TodoComponent implements OnChanges, AfterViewInit {
    @Input() todo;
    @Output() toggleTodo = new EventEmitter<string>();
    constructor() {
    }
    ngAfterViewInit() {
    }
    ngOnChanges() {
    }
}

