import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Path } from 'app/core/models/common';

@Component({
    selector: 'app-todo-list',
    template: `
  <ul>
    <li *ngFor="let todo of todos">
        <app-todo [todo]="todo" (toggleTodo)="toggleTodo.emit($event)"></app-todo>
    </li>
  </ul>
  `,
   changeDetection: ChangeDetectionStrategy.OnPush
})

export class TodoListComponent {
    @Input() todos;
    @Output() toggleTodo = new EventEmitter<string>();
    constructor() {
    }
}

