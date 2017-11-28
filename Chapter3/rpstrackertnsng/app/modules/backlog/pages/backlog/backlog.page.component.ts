import { Component, OnInit } from '@angular/core';

import { BacklogService } from '../../services/backlog.service';
import { Store } from '../../../../core/state/app-store';
import { PtItem } from '../../../../core/models/domain';

@Component({
    moduleId: module.id,
    selector: 'pt-backlog',
    templateUrl: 'backlog.page.component.html'
})

export class BacklogPageComponent implements OnInit {

    public items$ = this.store.select<PtItem[]>('backlogItems');

    constructor(
        private backlogService: BacklogService,
        private store: Store
    ) { }

    public ngOnInit() {
        this.backlogService.fetchItems();
    }

    public selectListItem(item: PtItem) {
        // navigate to detail page
    }

    public onAddTap(args) {
        // show add item dialog
    }
}
