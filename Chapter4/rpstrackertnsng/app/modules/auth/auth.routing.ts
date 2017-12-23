import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { LoginPageComponent, RegisterPageComponent } from './pages';
import { AuthContainerComponent } from './containers';

console.log('AuthRoutingModule loaded');

const routes: Routes = [
    {
        path: 'auth',
        component: AuthContainerComponent,
        children: [
            {
                path: 'login',
                component: LoginPageComponent
            },
            {
                path: 'register',
                component: RegisterPageComponent
            }
        ]
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class AuthRoutingModule {
    constructor() {
        console.log('AuthRoutingModule constructed');
    }
}
