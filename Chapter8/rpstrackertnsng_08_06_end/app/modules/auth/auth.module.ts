import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

// import { TranslateModule } from '@ngx-translate/core';
// import { TNSFontIconModule } from 'nativescript-ngx-fonticon';

import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';


import { AuthService } from '../../core/services/auth.service';
import { Store } from '../../core/state/app-store';

import { CONTAINERS } from './containers';
import { PAGES } from './pages';
import { COMPONENTS } from './components';
import { AuthRoutingModule } from './auth.routing';

console.log('AuthModule loaded');

@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        AuthRoutingModule,
        // TranslateModule.forChild(),
        // TNSFontIconModule
    ],
    exports: [
        ...PAGES
    ],
    declarations: [
        ...CONTAINERS,
        ...PAGES,
        ...COMPONENTS
    ],
    providers: [
        AuthService,
        Store
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AuthModule {
    constructor() {
        console.log('AuthModule constructed');
    }
}
