import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { APP_CONFIG } from '../../config/app-config.module';
import { AppConfig } from '../models/core/app-config.model';
import { Store } from '../state/app-store';
import { ServerErrorHandlerService } from './server-error-handler.service';
import { PtUser, PtLoginModel, PtAuthToken } from '../models/domain';



@Injectable()
export class AuthService {

    private get loginUrl() { return `${this.config.apiEndpoint}/auth`; }

    public get currentUser(): PtUser {
        return this.store.value.currentUser;
    }
    public set currentUser(ptUser: PtUser) {
        this.store.set<PtUser>('currentUser', ptUser);
    }

    constructor(
        @Inject(APP_CONFIG) private config: AppConfig,
        private http: Http,
        private store: Store,
        private errorHandlerService: ServerErrorHandlerService
    ) { }

    public isLoggedIn(): boolean {
        const hasCurrentUser = !!this.currentUser;
        return hasCurrentUser;
    }

    public login(loginModel: PtLoginModel): Observable<PtUser> {
        this.loginInternal(loginModel)
            .subscribe();
        return this.store.select<PtUser>('currentUser');
    }

    public logout() {
        this.currentUser = undefined;
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
                this.currentUser = data.user;
            })
            .catch(this.errorHandlerService.handleHttpError);
    }
}
