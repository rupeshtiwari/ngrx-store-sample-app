import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule , INITIAL_STATE} from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { reducer } from './reducers';

import { TodoListComponent } from 'app/todos/todo-list.component';
import { TodoComponent } from 'app/todos/todo.component';
import { NewTodoInputComponent } from 'app/todos/new-todo.component';
import { TodoContainerComponent } from 'app/todos/todo-container.component';

import { TreeNodeComponent } from 'app/tree/tree-node.component';
import { TreeNodeListComponent } from 'app/tree/tree-node-list.component';
import { TreeContainerComponent } from 'app/tree/tree-container.component';

import { MyErrorHandler } from './error-handler';
import { TreeEvents } from "app/tree/tree-events";


export const stateToRestore = {
  todos: {
    todos: [{
      text: 'Coding',
      selected: true,
      complete: true,
      path: ['todos', 0],
      id: 'todos0'
    }, {
      text: 'Learning',
      selected: true,
      complete: false,
      path: ['todos', 1],
      id: 'todos1'
    }]
  },
  tree: {
    loading: false,
    selectedPath: ['nodes', 0, 'nodes', 0],
    nodes: [
      {
        title: 'core'
        , nodes: [
          {
            title: 'service'
            , nodes: []
            , expanded: true
            , selected: true
            , tabIndex: 0
            , path: ['nodes', 0, 'nodes', 0]
          }
        ]
        , expanded: true
        , selected: false
        , tabIndex: -1
        , path: ['nodes', 0]
      },
      {
        title: 'shared'
        , nodes: [
          {
            title: 'pipes'
            , nodes: []
            , expanded: false
            , selected: false
            , tabIndex: -1
            , path: ['nodes', 1, 'nodes', 0]
          }
        ]
        , expanded: false
        , selected: false
        , tabIndex: -1
        , path: ['nodes', 1]
      },
      {
        title: 'features'
        , nodes: [
          {
            title: 'todo app'
            , expanded: false
            , tabIndex: -1
            , selected: false
            , path: ['nodes', 2, 'nodes', 0]
            , nodes: []
          },
          {
            title: 'tree app'
            , expanded: false
            , tabIndex: -1
            , selected: false
            , path: ['nodes', 2, 'nodes', 1]
            , nodes: []
          }
        ]
        , expanded: false
        , tabIndex: -1
        , selected: false
        , path: ['nodes', 2]
      }

    ]

  }
}




@NgModule({
  declarations: [
    AppComponent,
    NewTodoInputComponent,
    TodoComponent,
    TodoListComponent,
    TodoContainerComponent,
    TreeNodeComponent,
    TreeNodeListComponent,
    TreeContainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore(reducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
  ],
  providers: [{ provide: ErrorHandler, useClass: MyErrorHandler }
  , TreeEvents
  , {
      provide: INITIAL_STATE,
      useValue: stateToRestore
    }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
