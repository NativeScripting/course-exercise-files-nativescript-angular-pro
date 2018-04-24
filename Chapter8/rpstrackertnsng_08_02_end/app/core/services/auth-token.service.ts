import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

import { PtAuthToken } from '../../core/models/domain';

const AUTH_TOKEN_KEY = 'AUTH_TOKEN_KEY';

@Injectable()
export class AuthTokenService {

    get token(): PtAuthToken {
        return this.storageService.getItem<PtAuthToken>(AUTH_TOKEN_KEY);
    }

    set token(authToken: PtAuthToken) {
        this.storageService.setItem<PtAuthToken>(AUTH_TOKEN_KEY, authToken);
    }

    constructor(private storageService: StorageService) { }

}
