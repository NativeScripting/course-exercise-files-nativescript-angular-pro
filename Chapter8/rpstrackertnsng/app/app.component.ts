import { Component } from '@angular/core';
import { Page } from 'ui/page';
import { device } from 'platform';
import { LoggerService } from './core/services';
import { TNSFontIconService } from 'nativescript-ngx-fonticon';

@Component({
    selector: 'ns-app',
    templateUrl: 'app.component.html',
})
export class AppComponent {

    constructor(
        private page: Page,
        _fontIconService: TNSFontIconService
    ) {
        console.log('app component constructor');
        // page.actionBarHidden = true;
        page.backgroundSpanUnderStatusBar = true;

    }
}
