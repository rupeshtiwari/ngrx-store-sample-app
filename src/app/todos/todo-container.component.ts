import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromActions from '../actions/todo';
import { Todo } from '../reducers/todo';

import * as fromRoot from '../reducers';


@Component({
    selector: 'app-todo-container',
    template: `
    <pre>{{todos$|async|json}}</pre>
 <app-new-todo-input (create)="addTodo($event)"></app-new-todo-input>
 <app-todo-list [todos$] ="todos$" > </app-todo-list>
  `,
    changeDetection: ChangeDetectionStrategy.Default
})

export class TodoContainerComponent {
    todos$: Observable<Todo[]>;

    constructor(private store: Store<fromRoot.AppState>) {
        console.log('initialized todo container');
        this.todos$ = store.select(fromRoot.getAllTodos);
    }

    addTodo(text) {
        this.store.dispatch(fromActions.addTodo(text));
    }
}

