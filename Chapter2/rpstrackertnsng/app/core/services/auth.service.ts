import { Injectable, Inject } from '@angular/core';
import { APP_CONFIG } from '../../config/app-config.module';
import { AppConfig } from '../models/core/app-config.model';

@Injectable()
export class AuthService {

    private get loginUrl() { return `${this.config.apiEndpoint}/auth`; }


    constructor(
        @Inject(APP_CONFIG) private config: AppConfig
    ) { }
}
