import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class TreeEvents {
  private _toggle = new Subject();
  toggle$ = this._toggle.asObservable();
  private _selectExpand = new Subject<any>();
  selectExpand$ = this._selectExpand.asObservable();
  private _selectCollapse = new Subject<any>();
  selectCollapse$ = this._selectCollapse.asObservable();

  toggle(path) {
    this._toggle.next(path);
  }
  selectExpand({ path, hasChildrens }) {
    this._selectExpand.next({ path, hasChildrens });
  }
  selectCollapse(path) {
    this._selectCollapse.next({ path });
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