import { Component } from '@angular/core';
import { AuthService, NavigationService } from '../../../../core/services';
import { PtLoginModel, PtUser } from '../../../../core/models/domain';


@Component({
    moduleId: module.id,
    selector: 'pt-login-page',
    templateUrl: 'login.page.component.html',
    styleUrls: ['login.page.component.css']
})
export class LoginPageComponent {

    constructor(
        private authService: AuthService,
        private navigationService: NavigationService
    ) { }

    public onLogin(loginModel: PtLoginModel) {
        this.authService.login(loginModel)
            .subscribe((user: PtUser) => {
                this.navigationService.navigate(['/backlog'], { clearHistory: true });
            });
    }
}
