import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { Http } from '@angular/http';


import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptHttpModule } from 'nativescript-angular/http';

import { AppConfigModule } from './config/app-config.module';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';


import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { createTranslationLoader } from './utils';
import './utils/console-color';
import './rxjs-imports';



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

        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslationLoader),
                deps: [Http]
            }
        })
    ],
    declarations: [
        AppComponent
    ],
    providers: [

    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
