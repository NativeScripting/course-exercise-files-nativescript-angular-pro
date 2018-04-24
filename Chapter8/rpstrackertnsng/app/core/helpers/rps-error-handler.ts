import { ErrorHandler, Injectable, Injector } from '@angular/core';

import { LoggerService } from '../../core/services';

@Injectable()
export class RpsErrorHandler implements ErrorHandler {

    constructor(private injector: Injector) { }

    public handleError(error) {
        const loggerService = this.injector.get(LoggerService);

        const message = error.message ? error.message : error.toString();

        loggerService.error(message);

        throw error;
    }
}
