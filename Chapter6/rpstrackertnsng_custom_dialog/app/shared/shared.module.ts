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
import { SlideInDirective } from './directives/slide-in.directive';
import { SlideOutDirective } from './directives/slide-out.directive';


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
        LogoutDirective,
        SlideInDirective,
        SlideOutDirective
    ],
    declarations: [
        MenuComponent,
        LogoutDirective,
        TextInputModalComponent,
        ListSelectorModalComponent,
        SlideInDirective,
        SlideOutDirective
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
