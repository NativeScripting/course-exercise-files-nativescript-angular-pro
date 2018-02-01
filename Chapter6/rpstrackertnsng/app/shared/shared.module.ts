import { NgModule } from '@angular/core';

import { NativeScriptFormsModule } from 'nativescript-angular/forms';

import { NativeScriptUISideDrawerModule } from 'nativescript-pro-ui/sidedrawer/angular';
import { NativeScriptUIDataFormModule } from 'nativescript-pro-ui/dataform/angular';

import { MenuComponent } from './components/menu/menu.component';
import { LogoutDirective } from './directives/app-logout-attribute.directive';
import { PtModalService } from './modals/pt-modal.service';
import { TextInputModalComponent } from './modals/text-input/text-input.modal.component';


@NgModule({
    imports: [
        NativeScriptFormsModule,
        NativeScriptUISideDrawerModule,
        NativeScriptUIDataFormModule
    ],
    exports: [
        NativeScriptFormsModule,
        NativeScriptUISideDrawerModule,
        NativeScriptUIDataFormModule,
        MenuComponent,
        LogoutDirective
    ],
    declarations: [
        MenuComponent,
        LogoutDirective,
        TextInputModalComponent
    ],
    entryComponents: [
        TextInputModalComponent
    ],
    providers: [
        PtModalService
    ],
})
export class SharedModule { }
