import { Injectable } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular';
import { NavigationOptions } from 'nativescript-angular/router/ns-location-strategy';

@Injectable()
export class NavigationService {
    constructor(private routerExtensions: RouterExtensions) { }

    public navigate(commands: any[], extras?: NavigationExtras & NavigationOptions): Promise<boolean> {
        return this.routerExtensions.navigate(commands, extras);
    }

    public back() {
        this.routerExtensions.back();
    }

    public backToPreviousPage() {
        this.routerExtensions.backToPreviousPage();
    }
}
