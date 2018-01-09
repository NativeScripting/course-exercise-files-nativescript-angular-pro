import { NgModule } from '@angular/core';

import { NativeScriptUISideDrawerModule } from 'nativescript-pro-ui/sidedrawer/angular';

import { MenuComponent } from './components/menu/menu.component';
import { LogoutDirective } from './directives/app-logout-attribute.directive';


@NgModule({
    imports: [
        NativeScriptUISideDrawerModule
    ],
    exports: [
        NativeScriptUISideDrawerModule,
        MenuComponent,
        LogoutDirective
    ],
    declarations: [
        MenuComponent,
        LogoutDirective
    ],
    providers: [],
})
export class SharedModule { }
