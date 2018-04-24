import { NgModule, NO_ERRORS_SCHEMA, NgModuleFactoryLoader } from '@angular/core';
import { Http } from '@angular/http';

import { TNSFontIconModule } from 'nativescript-ngx-fonticon';

import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptHttpModule } from 'nativescript-angular/http';
import { NSModuleFactoryLoader } from 'nativescript-angular';
import { registerElement } from 'nativescript-angular/element-registry';

import { AppConfigModule } from './config/app-config.module';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AuthModule } from './modules/auth/auth.module';
import { BacklogModule } from './modules/backlog/backlog.module';
import './utils/console-color';
import './rxjs-imports';


registerElement('PullToRefresh', () => require('nativescript-pulltorefresh').PullToRefresh);


@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptHttpModule,
        AppConfigModule,
        AppRoutingModule,
        CoreModule,
        AuthModule,
        BacklogModule,

        TNSFontIconModule.forRoot({
            'fa': './assets/css/font-awesome.css'
        })

    ],
    declarations: [
        AppComponent
    ],
    providers: [
        { provide: NgModuleFactoryLoader, useClass: NSModuleFactoryLoader }
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule {
    constructor() {
        console.log('AppModule constructed');
    }
}
