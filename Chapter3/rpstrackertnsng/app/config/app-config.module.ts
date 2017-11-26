import { NgModule, InjectionToken } from '@angular/core';
import { environment } from '../environments/environment';
import { AppConfig } from '../core/models/core/app-config.model';

const appConfig = <AppConfig>require(environment.appConfigFile);

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');

@NgModule({
    providers: [
        { provide: APP_CONFIG, useValue: appConfig }
    ]
})
export class AppConfigModule { }
