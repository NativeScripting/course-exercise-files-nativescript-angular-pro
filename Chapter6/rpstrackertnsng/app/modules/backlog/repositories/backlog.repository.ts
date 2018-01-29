import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';

import { ErrorObservable } from 'rxjs/observable/ErrorObservable';


import { AppConfig } from '../../../core/models/core';
import { APP_CONFIG } from '../../../config/app-config.module';
import { PtItem } from '../../../core/models/domain';
import { PresetType } from '../../../shared/models/ui/types/presets';


@Injectable()
export class BacklogRepository {
    constructor(
        @Inject(APP_CONFIG) private config: AppConfig,
        private http: Http
    ) { }

    private getFilteredBacklogUrl(currentPreset: PresetType, currentUserId?: number) {
        switch (currentPreset) {
            case 'my':
                if (currentUserId) {
                    return `${this.config.apiEndpoint}/myItems?userId=${currentUserId}`;
                } else {
                    return `${this.config.apiEndpoint}/backlog`;
                }
            case 'open':
                return `${this.config.apiEndpoint}/openItems`;
            case 'closed':
                return `${this.config.apiEndpoint}/closedItems`;
            default:
                return `${this.config.apiEndpoint}/backlog`;
        }
    }

    private getPtItemUrl(itemId: number) {
        return `${this.config.apiEndpoint}/item/${itemId}`;
    }

    private putPtItemUrl(itemId: number) {
        return `${this.config.apiEndpoint}/item/${itemId}`;
    }

    public getPtItems(
        currentPreset: PresetType,
        currentUserId: number,
        errorHandler: (error: any) => ErrorObservable,
        successHandler: (data: PtItem[]) => void
    ) {
        this.http.get(this.getFilteredBacklogUrl(currentPreset, currentUserId))
            .map(res => res.json())
            .catch(errorHandler)
            .subscribe(successHandler);
    }

    public getPtItem(
        ptItemId: number,
        errorHandler: (error: any) => ErrorObservable,
        successHandler: (ptItem: PtItem) => void
    ) {
        this.http.get(this.getPtItemUrl(ptItemId))
            .map(res => res.json())
            .catch(errorHandler)
            .subscribe(successHandler);
    }

    public updatePtItem(
        item: PtItem,
        errorHandler: (error: any) => ErrorObservable,
        successHandler: (updatedItem: PtItem) => void
    ) {
        this.http.put(
            this.putPtItemUrl(item.id),
            { item: item }
        )
            .map(res => res.json())
            .catch(errorHandler)
            .subscribe(successHandler);
    }
}
