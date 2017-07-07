
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule, INITIAL_STATE } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

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
import { TreeEvents } from 'app/tree/tree-events';
import { getAppState, LocalStorageService } from './services/local-storage';
import { SaveEffects } from './effects/save';
import { TreeEffects } from 'app/effects/tree';
import { TreeDataService } from 'app/services/tree-data.service';

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
    EffectsModule.run(SaveEffects),
    EffectsModule.run(TreeEffects),
  ],
  providers: [{
    provide: ErrorHandler, useClass: MyErrorHandler
  }
    , TreeEvents
    ,
    LocalStorageService,
    TreeDataService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

