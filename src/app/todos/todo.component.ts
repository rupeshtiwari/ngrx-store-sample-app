import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-todo',
    template: `
    <li>
             {{todo.text}}  <button>Done</button>
             </li>
  `,
   changeDetection: ChangeDetectionStrategy.OnPush
})

export class TodoComponent {
    @Input() todo;
}

