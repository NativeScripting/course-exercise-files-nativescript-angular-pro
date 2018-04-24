import { Directive, HostListener } from '@angular/core';
import { AuthService, NavigationService } from '../../core/services';

@Directive({ selector: '[appLogout]' })
export class LogoutDirective {
    constructor(
        private authService: AuthService,
        private navigationService: NavigationService
    ) { }

    @HostListener('tap') public onTap() {
        this.authService.logout();
        this.navigationService.navigate(['/auth/login'], { clearHistory: true });
    }
}
