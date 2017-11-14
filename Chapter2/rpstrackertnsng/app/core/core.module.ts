import { NgModule, Optional, SkipSelf } from '@angular/core';


import { SERVICES } from './services';


@NgModule({
    imports: [],
    exports: [],
    declarations: [],
    providers: [
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
