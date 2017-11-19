import {
    AuthService,
    LoggerService
} from './';

export * from './auth.service';
export * from './logger.service';

export const SERVICES = [
    AuthService,
    LoggerService
];
