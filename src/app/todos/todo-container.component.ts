import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as todoActions from 'app/core/store/actions/todo.actions';
import { Todo } from 'app/core/models/todo';
import * as fromRoot from 'app/core/store';

@Component({
    selector: 'app-todo-container',
    template: `
    <fieldset>
        <legend>Todos</legend>
            <app-new-todo-input (create)="addTodo($event)">
            </app-new-todo-input>
            <br>
        <app-todo-list (toggleTodo)="toggleTodo($event)" [todos]="todos$|async">
        </app-todo-list>
    </fieldset>
  `,
    changeDetection: ChangeDetectionStrategy.OnPush
    , styles: [`#tree{cursor:pointer}`]
})

export class TodoContainerComponent {
    @Input() todos$: Observable<Todo[]>;
    constructor(private store: Store<fromRoot.State>) {
        this.todos$ = store.select(fromRoot.getAllTodos);
    }
    toggleTodo(id: string) {
        this.store.dispatch(todoActions.toggleTodo(id));
    }
    addTodo({ text }) {
        this.store.dispatch(todoActions.addTodo(new Todo().fromValues({ complete: false, id: this.randId, text: text } as Todo)));
    }
    get randId() {
        return Math.random().toString(36).substr(2, 10);
    }
}

