import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { Routes } from '@angular/router';
import { AuthPageComponent } from './modules/auth/pages';
import { BacklogPageComponent } from './modules/backlog/pages';
import { DetailPageComponent } from './modules/backlog/pages/detail/detail.page.component';


const routes: Routes = [
    { path: '', redirectTo: '/auth', pathMatch: 'full' },
    { path: 'auth', component: AuthPageComponent },
    { path: 'backlog', component: BacklogPageComponent },
    { path: 'detail/:id', component: DetailPageComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
