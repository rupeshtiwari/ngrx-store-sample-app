import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-todo-list',
    template: `
  <ul>
    <li *ngFor="let todo of todos$ | async">
        <app-todo [todo]="todo"></app-todo>
    </li>
  </ul>
  `,
   changeDetection: ChangeDetectionStrategy.OnPush
})

export class TodoListComponent {
    @Input() todos$;
}

