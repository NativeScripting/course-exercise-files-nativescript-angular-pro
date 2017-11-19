import { Component } from '@angular/core';
import { Page } from 'ui/page';
import { device } from 'platform';
import { TranslateService } from '@ngx-translate/core';
import { LoggerService } from './core/services';

@Component({
    selector: 'ns-app',
    templateUrl: 'app.component.html',
})
export class AppComponent {
    public myAppText = 'Hello';

    constructor(
        private page: Page,
        private translateService: TranslateService,
        private loggerService: LoggerService
    ) {
        console.log('app component constructor');
        this.myAppText = device.language;
        translateService.setDefaultLang('en');
        translateService.use(device.language);
    }

}
