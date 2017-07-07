import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { TreeDataService } from 'app/core/services/tree-data.service';
import { LocalStorageService } from 'app/core/services/local-storage.service';
import { TreeEvents } from 'app/tree/tree-events';
import { reducer } from 'app/core/store';
import { SaveEffects } from 'app/core/store/save/save.effects';
import { TreeEffects } from 'app/core/store/tree/tree.effects';
import { RestoreEffects } from 'app/core/store/restore/restore.effects';


@NgModule({
    imports: [CommonModule,
        StoreModule.provideStore(reducer),
        StoreDevtoolsModule.instrumentOnlyWithExtension(),
        EffectsModule.run(SaveEffects),
        EffectsModule.run(TreeEffects),
        EffectsModule.run(RestoreEffects)
    ],
    exports: [],
    declarations: [],
    providers: [LocalStorageService, TreeDataService, TreeEvents],
})

export class CoreModule {
    constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    }
}
