import { NgModule } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';

import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';


import { AuthService } from '../../core/services/auth.service';
import { Store } from '../../core/state/app-store';

import { PAGES } from './pages';
import { COMPONENTS } from './components';
import { AuthRoutingModule } from './auth.routing';


@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        AuthRoutingModule,
        TranslateModule.forChild()
    ],
    exports: [
        ...PAGES
    ],
    declarations: [
        ...PAGES,
        ...COMPONENTS
    ],
    providers: [
        AuthService,
        Store
    ]
})
export class AuthModule { }
