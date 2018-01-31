import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { BacklogService } from './services/backlog.service';
import { BacklogRepository } from './repositories/backlog.repository';
import { BacklogRoutingModule } from './backlog.routing';
import { SharedModule } from '../../shared/shared.module';
import { PAGES } from './pages';
import { COMPONENTS } from './components';
import { NewItemModalComponent } from './modals/new-item/new-item.modal.component';

@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptRouterModule,
        BacklogRoutingModule,
        SharedModule
    ],
    exports: [
        ...PAGES
    ],
    declarations: [
        ...PAGES,
        ...COMPONENTS,
        NewItemModalComponent
    ],
    entryComponents: [
        NewItemModalComponent
    ],
    providers: [
        BacklogRepository,
        BacklogService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class BacklogModule {
    constructor() {
        console.log('BacklogModule constructed');
    }
}
