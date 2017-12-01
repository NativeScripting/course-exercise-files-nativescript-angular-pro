import { Component, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { PtLoginModel } from '../../../core/models/domain';

@Component({
    moduleId: module.id,
    selector: 'pt-login-form',
    templateUrl: 'login-form.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent {

    @Output() loginInitiated = new EventEmitter<PtLoginModel>();

    public email = 'alex@email.com';
    public password = 'nuvious';

    public onLoginTap(isValid: boolean) {
        if (isValid) {
            const loginModel: PtLoginModel = {
                username: this.email,
                password: this.password
            };
            this.loginInitiated.emit(loginModel);
        }
    }
}
