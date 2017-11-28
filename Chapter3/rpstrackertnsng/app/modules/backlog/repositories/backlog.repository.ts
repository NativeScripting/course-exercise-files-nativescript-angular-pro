import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';

import { ErrorObservable } from 'rxjs/observable/ErrorObservable';


import { AppConfig } from '../../../core/models/core';
import { APP_CONFIG } from '../../../config/app-config.module';
import { PtItem } from '../../../core/models/domain';


@Injectable()
export class BacklogRepository {
    constructor(
        @Inject(APP_CONFIG) private config: AppConfig,
        private http: Http
    ) { }

    private get backlogUrl() {
        return `${this.config.apiEndpoint}/backlog`;
    }

    public getPtItems(
        errorHandler: (error: any) => ErrorObservable,
        successHandler: (data: PtItem[]) => void
    ) {
        this.http.get(this.backlogUrl)
            .map(res => res.json())
            .catch(errorHandler)
            .subscribe(successHandler);
    }
}
