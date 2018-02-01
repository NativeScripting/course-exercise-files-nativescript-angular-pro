import { NgModule } from '@angular/core';

import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';

import { NativeScriptUISideDrawerModule } from 'nativescript-pro-ui/sidedrawer/angular';
import { NativeScriptUIDataFormModule } from 'nativescript-pro-ui/dataform/angular';

import { MenuComponent } from './components/menu/menu.component';
import { LogoutDirective } from './directives/app-logout-attribute.directive';
import { PtModalService } from './modals/pt-modal.service';
import { TextInputModalComponent } from './modals/text-input/text-input.modal.component';
import { ListSelectorModalComponent } from './modals/list-selector/list-selector.modal.component';


@NgModule({
    imports: [
        NativeScriptModule,
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
        TextInputModalComponent,
        ListSelectorModalComponent
    ],
    entryComponents: [
        TextInputModalComponent,
        ListSelectorModalComponent
    ],
    providers: [
        PtModalService
    ],
})
export class SharedModule { }
