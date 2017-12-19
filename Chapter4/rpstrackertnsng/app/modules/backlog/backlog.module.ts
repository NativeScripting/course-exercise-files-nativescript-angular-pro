import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { NativeScriptModule } from 'nativescript-angular/nativescript.module';

import { BacklogService } from './services/backlog.service';
import { BacklogRepository } from './repositories/backlog.repository';
import { PAGES } from './pages';
import { COMPONENTS } from './components';

@NgModule({
    imports: [
        NativeScriptModule
    ],
    exports: [
        ...PAGES
    ],
    declarations: [
        ...PAGES,
        ...COMPONENTS,
    ],
    providers: [
        BacklogRepository,
        BacklogService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class BacklogModule { }
