import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { BacklogPageComponent, DetailPageComponent } from './pages';

const routes: Routes = [
    { path: 'backlog', component: BacklogPageComponent },
    { path: 'detail/:id', component: DetailPageComponent }
];


@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class BacklogRoutingModule { }
