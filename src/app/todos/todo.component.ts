import { Component, Input, ChangeDetectionStrategy, OnChanges, AfterViewInit, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Path } from 'app/reducers/todo';

@Component({
    selector: 'app-todo',
    template: `
    <li>
    <span [ngClass]="todo.complete?'complete':'pending'">
    {{todo.text}} - 
    {{todo.complete?'complete':'pending'}}
    </span>
             <button class="btn btn-success" (click)="toggleTodo.emit(todo.path)">Toggle</button>
             </li>
  `,
   changeDetection: ChangeDetectionStrategy.OnPush,
   styles: [`.complete{ text-decoration: line-through;color:gray} .pending{text-decoration:'';color:''}`]
})

export class TodoComponent implements OnChanges, AfterViewInit  {
    @Input() todo;
    @Output() toggleTodo = new EventEmitter<Path>();
    constructor() {
        // console.log('constructor', 'TodoComponent');
    }
    ngAfterViewInit () {
       // console.log('ngAfterViewInit', `${this.todo.text}`);
    }
    ngOnChanges() {
       // console.log('ngOnChanges', `${this.todo.text}`);
    }
}

