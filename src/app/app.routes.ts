import { Routes } from '@angular/router';

import { TreeContainerComponent } from 'app/tree/tree-container.component';
import { TodoContainerComponent } from 'app/todos/todo-container.component';

export const routes: Routes = [
  {
    path: '',
    component: TreeContainerComponent
  },
  {
    path: 'tree',
    component: TreeContainerComponent
  },
  {
    path: 'todo',
    component: TodoContainerComponent
  },
];
