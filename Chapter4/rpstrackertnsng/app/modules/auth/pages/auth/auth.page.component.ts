import { Component } from '@angular/core';

import { Page } from 'ui/page';

import { AuthService } from '../../../../core/services';
import { PtLoginModel, PtUser } from '../../../../core/models/domain';
import { RouterExtensions } from 'nativescript-angular/router/router-extensions';

@Component({
    moduleId: module.id,
    selector: 'pt-auth-page',
    templateUrl: 'auth.page.component.html',
    styleUrls: ['auth.page.component.css']
})
export class AuthPageComponent {

    public loggedIn = false;
    public loggedInName = '';


    constructor(
        private page: Page,
        private authService: AuthService
    ) {
        this.page.actionBarHidden = true;
        this.page.backgroundSpanUnderStatusBar = true;
    }

    public onLogin(loginModel: PtLoginModel) {
        this.authService.login(loginModel)
            .subscribe((user: PtUser) => {
                this.loggedIn = true;

                if (user) {
                    this.loggedInName = user.fullName;
                }
                // TODO: navigate to the backlog
            });
    }

    public logout() {
        this.authService.logout();
        this.loggedIn = false;
        // TODO: navigate to the login page
    }
}
