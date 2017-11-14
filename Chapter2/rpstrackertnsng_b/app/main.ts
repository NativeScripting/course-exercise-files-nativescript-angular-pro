// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from 'nativescript-angular/platform';

import { AppModule } from './app.module';
import { AppOptions } from 'nativescript-angular/platform-common';


const appOptions: AppOptions = {
    cssFile: 'rps-styles.css',
    startPageActionBarHidden: true
};

platformNativeScriptDynamic(appOptions).bootstrapModule(AppModule);
