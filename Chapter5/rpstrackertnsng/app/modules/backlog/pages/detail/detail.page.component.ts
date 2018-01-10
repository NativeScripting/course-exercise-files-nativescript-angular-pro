import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { PtItem } from '../../../../core/models/domain';
import { BacklogService } from '../../services/backlog.service';

import { Store } from '../../../../core/state/app-store';


@Component({
    moduleId: module.id,
    selector: 'pt-backlog-detail-page',
    templateUrl: 'detail.page.component.html'
})
export class DetailPageComponent implements OnInit {

    public currentSelectedItem$: Observable<PtItem> = this.store.select<PtItem>('currentSelectedItem');

    constructor(
        private activatedRoute: ActivatedRoute,
        private backlogService: BacklogService,
        private store: Store
    ) { }

    public ngOnInit() {
        this.backlogService.getItemFromCacheOrServer(parseInt(this.activatedRoute.snapshot.params['id']));
    }

    public onItemSaved(item: PtItem) {
        this.backlogService.updatePtItem(item);
    }

    public onNavBackTap() {
        // TODO: navigate back to previous page
    }

}
