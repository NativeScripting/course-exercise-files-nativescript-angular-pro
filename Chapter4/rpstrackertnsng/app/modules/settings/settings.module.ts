import { NgModule } from '@angular/core';

import { SettingsComponent } from './settings.component';
import { SettingsRoutingModule } from './settings.routing';

console.log('SettingsModule loaded');

@NgModule({
    imports: [
        SettingsRoutingModule
    ],
    exports: [],
    declarations: [SettingsComponent],
    providers: [],
})
export class SettingsModule {
    constructor() {
        console.log('SettingsModule constructed');
    }
}
