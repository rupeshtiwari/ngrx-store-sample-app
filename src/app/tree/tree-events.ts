import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class TreeEvents {
  private _toggle = new Subject();
  toggle$ = this._toggle.asObservable();

  toggle(path) {
    this._toggle.next(path);
  }
}

// export class TodoComponent {
//   constructor(private todosService: TodosService) {}
//   toggle(todo) {
//     this.todosService.toggle(todo);
//   }
// }

// export class TodosPageComponent {
//   constructor(private todosService: TodosService) {
//     todosService.toggle$.subscribe(..);
//   }
// }