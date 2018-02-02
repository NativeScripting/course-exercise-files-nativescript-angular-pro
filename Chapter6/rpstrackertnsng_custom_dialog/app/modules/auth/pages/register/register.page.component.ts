import { Component } from '@angular/core';
import { AuthService, NavigationService } from '../../../../core/services';
import { PtUser, PtRegisterModel } from '../../../../core/models/domain';

@Component({
    moduleId: module.id,
    selector: 'pt-register-page',
    templateUrl: 'register.page.component.html',
    styleUrls: ['register.page.component.css']
})
export class RegisterPageComponent {

    constructor(
        private authService: AuthService,
        private navigationService: NavigationService
    ) { }

    public onRegister(registerModel: PtRegisterModel) {
        this.authService.register(registerModel)
            .subscribe((user: PtUser) => {
                this.navigationService.navigate(['/backlog'], { clearHistory: true });
            });
    }
}
