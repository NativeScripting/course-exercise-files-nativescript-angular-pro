import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { AppConfig } from '../models/core';
import { APP_CONFIG } from '../../config/app-config.module';
import { PtUser } from '../../core/models/domain';
import { Store } from '../state/app-store';


@Injectable()
export class PtUserService {

    private get usersUrl() { return `${this.config.apiEndpoint}/users`; }

    constructor(
        @Inject(APP_CONFIG) private config: AppConfig,
        private http: Http,
        private store: Store
    ) { }

    public fetchUsers() {
        this.http.get(this.usersUrl)
            .map(res => res.json())
            .catch((error: any) => {
                return Observable.throw(error.json().error || 'Server error');
            })
            .subscribe((data: PtUser[]) => {
                data.forEach(u => {
                    u.avatar = `${this.config.apiEndpoint}/photo/${u.id}`;
                });
                this.store.set('users', data);
            });
    }
}
