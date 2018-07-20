import { TypeProvider } from '@angular/core';
import { LoggingLevelEnum } from '../enums/logging-level.enum';

export type AppType = 'Ns' | 'Web';

export interface AppConfig {
    appType: AppType;
    apiEndpoint: string;
    loggingEnabled: boolean;
    loggingLevel: LoggingLevelEnum;
    storageServiceClass: TypeProvider;
}
