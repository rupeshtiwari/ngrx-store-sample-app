import { Component, Input, ChangeDetectionStrategy, OnChanges, AfterViewInit, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Path } from 'app/reducers/todo';

@Component({
    selector: 'app-todo',
    template: `
    <li>
    {{todo.text}} - 
    {{todo.complete?'complete':'pending'}}
             <button (click)="toggleTodo.emit(todo.path)">Toggle</button>
             </li>
  `,
   changeDetection: ChangeDetectionStrategy.OnPush
})

export class TodoComponent implements OnChanges, AfterViewInit  {
    @Input() todo;
    @Output() toggleTodo = new EventEmitter<Path>();
    constructor() {
        console.log('initialized', 'TodoComponent');
    }
    ngAfterViewInit () {
        console.log('initialized', `${this.todo.text}`);
    }
    ngOnChanges() {
        console.log('changed', `${this.todo.text}`);
    }
}

