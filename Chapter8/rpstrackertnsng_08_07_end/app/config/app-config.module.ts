import { NgModule, InjectionToken } from '@angular/core';
import { environment } from '../environments/environment';
import { AppConfig } from '../core/models/core/app-config.model';

import { StorageNsService } from '../core/services/ns/storage-ns.service';

const envName = global.TNS_ENV;

console.log('ENV NAME in app.config: ' + envName);

const appConfig = global.TNS_WEBPACK ?
    <AppConfig>require(`./app.config.${envName}.json`) :
    <AppConfig>require(environment.appConfigFile);

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');


@NgModule({
    providers: [
        { provide: APP_CONFIG, useValue: appConfig }
    ]
})
export class AppConfigModule { }
