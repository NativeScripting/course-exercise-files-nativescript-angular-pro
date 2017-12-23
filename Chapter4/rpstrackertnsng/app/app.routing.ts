import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { Routes } from '@angular/router';

console.log('AppRoutingModule loaded');

const routes: Routes = [
    { path: '', redirectTo: '/backlog/open', pathMatch: 'full' },
    { path: 'backlog', redirectTo: '/backlog/open', pathMatch: 'full' },
    { path: 'settings', loadChildren: './modules/settings/settings.module#SettingsModule' }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {
    constructor() {
        console.log('AppRoutingModule constructed');
    }
}

