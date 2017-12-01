import { Component } from '@angular/core';
import { AuthService } from '../../../../core/services';
import { PtLoginModel, PtUser } from '../../../../core/models/domain';

@Component({
    moduleId: module.id,
    selector: 'pt-auth-page',
    templateUrl: 'auth.page.component.html'
})

export class AuthPageComponent {

    public loggedIn = false;
    public loggedInName = '';

    constructor(
        private authService: AuthService
    ) { }

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
