import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { reducer } from './reducers';
import { TreeNodesComponent } from 'app/tree/tree-nodes.component';
import { TreeNodeComponent } from 'app/tree/tree-node.component';
import { TodoListComponent } from 'app/todos/todo-list.component';
import { TodoComponent } from 'app/todos/todo.component';
import { NewTodoInputComponent } from 'app/todos/new-todo.component';
import { TodoContainerComponent } from 'app/todos/todo-container.component';

@NgModule({
  declarations: [
    AppComponent,
    NewTodoInputComponent,
    TodoListComponent,
    TodoComponent,
    TodoContainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore(reducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
