import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/observable/timer';

import { State } from 'app/core/models/app.state';
import * as saveActions from 'app/core/store/actions/save.actions';
import * as fromRoot from 'app/core/store';
@Component({
    selector: 'app-home',
    template: `
     
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="#">NgRx-Store-Sample-App</a>
      </div>
      <ul class="nav navbar-nav">
       
        <li routerLinkActive="active" [routerLink]="['tree']" routerLinkActiveOptions="{exact:true}"><a>Tree</a></li>
        <li routerLinkActive="active" routerLinkActiveOptions="{exact:true}" [routerLink]="['todo']"><a>Todo</a></li>

      </ul>
    </div>
  </nav>
<router-outlet></router-outlet>
 <app-auto-save>  </app-auto-save>
`
})

export class HomeContainerComponent implements OnDestroy {
    appState: fromRoot.State;
    stateFromStore: any;
    onSave$: Subject<any> = new Subject<any>();
    appState$: Observable<State>;
    loading$: Observable<boolean>;
    _key$: any;
    _onSave$: any;
    constructor(
        private route: ActivatedRoute,
        private store: Store<fromRoot.State>
    ) {
        this._key$ = route.params.map(p => p.id)
            .subscribe(id =>
                store.dispatch(saveActions.restoreAppState(id)));
    }
    ngOnDestroy() {
        if (this._key$) {
            this._key$.unsubscribe();
        }

    }

}


