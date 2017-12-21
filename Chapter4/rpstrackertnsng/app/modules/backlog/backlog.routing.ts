import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { BacklogPageComponent, DetailPageComponent } from './pages';
import { AuthGuard } from '../../core/services';

const routes: Routes = [
    {
        path: 'backlog',
        component: BacklogPageComponent,
        canActivate: [AuthGuard]
    },
    { path: 'detail/:id', component: DetailPageComponent }
];


@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class BacklogRoutingModule { }
