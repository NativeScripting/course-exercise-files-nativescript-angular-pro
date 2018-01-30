import { NgModule } from '@angular/core';

import { NativeScriptUISideDrawerModule } from 'nativescript-pro-ui/sidedrawer/angular';
import { NativeScriptUIDataFormModule } from 'nativescript-pro-ui/dataform/angular';

import { MenuComponent } from './components/menu/menu.component';
import { LogoutDirective } from './directives/app-logout-attribute.directive';
import { PtModalService } from './modals/pt-modal.service';


@NgModule({
    imports: [
        NativeScriptUISideDrawerModule,
        NativeScriptUIDataFormModule
    ],
    exports: [
        NativeScriptUISideDrawerModule,
        NativeScriptUIDataFormModule,
        MenuComponent,
        LogoutDirective
    ],
    declarations: [
        MenuComponent,
        LogoutDirective
    ],
    providers: [
        PtModalService
    ],
})
export class SharedModule { }
