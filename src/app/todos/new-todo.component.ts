
import { EventEmitter, Component, Output, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-new-todo-input',
  template: `
    <div class="row">
    <div class="col-md-7">
      <input class="form-control" type="text" #newtodo placeholder="Add a todo" />
      </div>
      <div class="col-md-5">
      <button class="btn btn-info btn-lg" (click)="saveTodo(newtodo)">Add</button>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class NewTodoInputComponent {
  static id = 0;
  @Output() create = new EventEmitter();
  saveTodo(el) {
    this.create.emit({ text: el.value, path: ['todos', NewTodoInputComponent.id] });
    el.value = '';
    NewTodoInputComponent.id += 1;
  }
}
