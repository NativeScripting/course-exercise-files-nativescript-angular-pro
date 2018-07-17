import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { SettingsComponent } from './settings.component';

console.log('BacklogRoutingModule loaded');

const routes: Routes = [
    {
        path: '',
        component: SettingsComponent
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class SettingsRoutingModule {
    constructor() {
        console.log('SettingsRoutingModule constructed');
    }
}
