import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromActions from '../actions/todo';
import { Todo } from '../reducers/todo';

import * as fromRoot from '../reducers';


@Component({
    selector: 'app-todo-container',
    template: `
    <h2>Todos</h2>
   
     <app-new-todo-input (create)="addTodo($event)"></app-new-todo-input>
    ========================
    <app-todo-list 
                [todos$]="todos$ | async">
    </app-todo-list>
     <pre>{{todos$ | async | json}}</pre>
  `,
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class TodoContainerComponent {
    @Input() todos$: Observable<Todo[]>;

    constructor(private store: Store<fromRoot.AppState>) {
        console.log('initialized', 'TodoContainerComponent');
        this.todos$ = store.select(fromRoot.getAllTodos);
    }
    addTodo(todo) {
        this.store.dispatch(fromActions.addTodo(todo));
    }
}

