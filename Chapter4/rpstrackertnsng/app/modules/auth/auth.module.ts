import { NgModule } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';

import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { AuthService } from '../../core/services/auth.service';
import { Store } from '../../core/state/app-store';

import { PAGES } from './pages';
import { COMPONENTS } from './components';


@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptRouterModule,
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
