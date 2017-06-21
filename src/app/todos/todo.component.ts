import { Component, Input, ChangeDetectionStrategy, OnChanges, AfterViewInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-todo',
    template: `
    <li>
    {{todo.text}}
             <button>Done</button>
             </li>
  `,
   changeDetection: ChangeDetectionStrategy.OnPush
})

export class TodoComponent implements OnChanges, AfterViewInit  {
    @Input() todo;
    constructor() {
        console.log('initialized','TodoComponent');
    }
    ngAfterViewInit () {
        console.log('initialized',`${this.todo.text}`);
    }
    ngOnChanges() {
        console.log('changed',`${this.todo.text}`);
    }
}

