import { NgModule, Optional, SkipSelf, ErrorHandler } from '@angular/core';


import { SERVICES } from './services';
import { RpsErrorHandler } from './helpers';


@NgModule({
    imports: [],
    exports: [],
    declarations: [],
    providers: [
        { provide: ErrorHandler, useClass: RpsErrorHandler },
        ...SERVICES
    ],
})
export class CoreModule {
    constructor(
        @Optional() @SkipSelf() parentModule: CoreModule
    ) {
        if (parentModule) {
            throw new Error('CoreModule has already been loaded. Import CoreModule into the AppModule only.');
        }
    }
}
