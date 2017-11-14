import { Component } from '@angular/core';

import * as app from 'application';
import { isIOS } from 'platform';
import { Page } from 'ui/page';
import { topmost } from 'ui/frame';


@Component({
    selector: 'ns-app',
    templateUrl: 'app.component.html',
})

export class AppComponent {
    constructor(private page: Page) {
        //this.page.actionBarHidden = true;
        //this.page.backgroundSpanUnderStatusBar = true;

        if (isIOS) {
            topmost().ios.controller.navigationBar.barStyle = 1;
        } else {

        }
    }
}
