// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from 'nativescript-angular/platform';

import { AppModule } from './app.module';
import { setAppEvents } from './globals/app-events';

setAppEvents();

console.log('main before bootstrap');
platformNativeScriptDynamic().bootstrapModule(AppModule);
console.log('main after bootstrap');
