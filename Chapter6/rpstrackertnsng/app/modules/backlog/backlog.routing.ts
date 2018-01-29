import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { BacklogPageComponent, DetailPageComponent } from './pages';
import { AuthGuard } from '../../core/services';

console.log('BacklogRoutingModule loaded');

const routes: Routes = [
    {
        path: 'backlog/:preset',
        component: BacklogPageComponent,
        canActivate: [AuthGuard]
    },
    { path: 'detail/:id', component: DetailPageComponent }
];


@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class BacklogRoutingModule {
    constructor() {
        console.log('BacklogRoutingModule constructed');
    }
}
