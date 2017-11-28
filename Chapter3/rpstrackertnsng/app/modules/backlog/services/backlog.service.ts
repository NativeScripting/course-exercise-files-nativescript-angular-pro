import { Injectable, NgZone } from '@angular/core';
import { BacklogRepository } from '../repositories/backlog.repository';
import { Store } from '../../../core/state/app-store';
import { ServerErrorHandlerService } from '../../../core/services';
import { PtItem } from '../../../core/models/domain';




@Injectable()
export class BacklogService {
    constructor(
        private repo: BacklogRepository,
        private store: Store,
        private errorHandlerService: ServerErrorHandlerService,
        private zone: NgZone
    ) { }

    public fetchItems() {
        this.repo.getPtItems(
            this.errorHandlerService.handleHttpError,
            (ptItems: PtItem[]) => {
                this.zone.run(() => {
                    this.store.set('backlogItems', ptItems);
                });
            }
        );
    }

}
