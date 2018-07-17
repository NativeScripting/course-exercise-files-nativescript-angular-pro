import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { APP_CONFIG } from '../../config/app-config.module';
import { AppConfig } from '../models/core/app-config.model';
import { Store } from '../state/app-store';

import { ServerErrorHandlerService } from './server-error-handler.service';
import { AuthTokenService } from './auth-token.service';
import { PtUser, PtLoginModel, PtAuthToken, PtRegisterModel } from '../models/domain';
import { getUserAvatarUrl } from '../helpers/user-avatar-helper';
import { StorageNsService } from './ns/storage-ns.service';

const CURRENT_USER_KEY = 'CURRENT_USER_KEY';

@Injectable()
export class AuthService {

    private get loginUrl() { return `${this.config.apiEndpoint}/auth`; }
    private get registerUrl() { return `${this.config.apiEndpoint}/register`; }

    public get currentUser(): PtUser {
        const user = this.storageService.getItem<PtUser>(CURRENT_USER_KEY);
        if (!this.store.value.currentUser && user) {
            this.store.set<PtUser>('currentUser', user);
        }
        return user;
    }

    public set currentUser(ptUser: PtUser) {
        ptUser.avatar = getUserAvatarUrl(this.config.apiEndpoint, ptUser.id);
        this.storageService.setItem<PtUser>(CURRENT_USER_KEY, ptUser);
        this.store.set<PtUser>('currentUser', ptUser);
    }

    constructor(
        @Inject(APP_CONFIG) private config: AppConfig,
        private http: Http,
        private store: Store,
        private authTokenService: AuthTokenService,
        private storageService: StorageNsService,
        private errorHandlerService: ServerErrorHandlerService
    ) { }

    public isLoggedIn(): boolean {
        const hasToken = !!this.authTokenService.token;
        const hasCurrentUser = !!this.currentUser;
        return hasToken && hasCurrentUser;
    }

    public login(loginModel: PtLoginModel): Observable<PtUser> {
        this.loginInternal(loginModel)
            .subscribe();
        return this.store.select<PtUser>('currentUser');
    }

    public register(registerModel: PtRegisterModel): Observable<PtUser> {
        this.registerInternal(registerModel)
            .subscribe();
        return this.store.select<PtUser>('currentUser');
    }

    public logout() {
        this.authTokenService.token = { access_token: '', dateExpires: new Date() };
        this.storageService.setItem(CURRENT_USER_KEY, '');
    }

    private loginInternal(loginModel: PtLoginModel) {
        return this.http.post(
            this.loginUrl,
            {
                loginModel: loginModel,
                grant_type: 'password'
            }
        )
            .map(response => response.json())
            .do((data: { authToken: PtAuthToken, user: PtUser }) => {
                this.authTokenService.token = data.authToken;
                this.currentUser = data.user;
            })
            .catch(this.errorHandlerService.handleHttpError);
    }

    private registerInternal(registerModel: PtRegisterModel) {
        const headers = new Headers();

        return this.http.post(
            this.registerUrl,
            { registerModel: registerModel }
        )
            .map(response => response.json())
            .do((data: { authToken: PtAuthToken, user: PtUser }) => {
                this.authTokenService.token = data.authToken;
                this.currentUser = data.user;
            })
            .catch(this.errorHandlerService.handleHttpError);
    }

}
