
import { EventEmitter, Component, Output, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-new-todo-input',
  template: `
    <div class="row">
    <div class="col-md-7">
      <input class="form-control" type="text" #newtodo placeholder="Add a todo" />
      </div>
      <div class="col-md-5">
      <button class="btn btn-success btn-lg" (click)="saveTodo(newtodo)">Add</button>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class NewTodoInputComponent {
  @Output() create = new EventEmitter();
  saveTodo(el) {
    this.create.emit({ text: el.value });
    el.value = '';
  }
}
