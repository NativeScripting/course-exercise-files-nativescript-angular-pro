import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { NativeScriptModule } from 'nativescript-angular/nativescript.module';

import { BacklogService } from './services/backlog.service';
import { BacklogRepository } from './repositories/backlog.repository';


@NgModule({
    imports: [
        NativeScriptModule
    ],
    exports: [],
    declarations: [

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
