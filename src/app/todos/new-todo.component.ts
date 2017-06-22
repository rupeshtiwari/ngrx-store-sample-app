
import { EventEmitter, Component, Output, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-new-todo-input',
  template: `
    <div>
      <input type="text" #newtodo placeholder="Add a todo" />
      <button (click)="saveTodo(newtodo)">Add</button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class NewTodoInputComponent {
  static id = 0;
  @Output() create = new EventEmitter();
  saveTodo(el) {
    this.create.emit({ text: el.value, path: ['todos', NewTodoInputComponent.id  ] });
    el.value = '';
    NewTodoInputComponent.id += 1;
  }
}
