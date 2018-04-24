import { Component, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { PtRegisterModel } from '../../../../core/models/domain';

@Component({
    moduleId: module.id,
    selector: 'pt-register-form',
    templateUrl: 'register-form.component.html',
    styleUrls: ['register-form.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterFormComponent {
    @Output() registerInitiated = new EventEmitter<PtRegisterModel>();

    public email: string;
    public password: string;
    public fullName: string;

    constructor() { }

    public onRegisterTap(isValid: boolean) {
        if (isValid) {
            const registerModel: PtRegisterModel = {
                username: this.email,
                password: this.password,
                fullName: this.fullName
            };
            this.registerInitiated.emit(registerModel);
        }
    }
}
