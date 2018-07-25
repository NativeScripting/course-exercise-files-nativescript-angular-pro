import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

import { ItemEventData } from 'ui/list-view';

import { PtItem } from '../../../../core/models/domain';

@Component({
    moduleId: module.id,
    selector: 'pt-list',
    templateUrl: 'pt-list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PtListComponent {

    @Input() items: PtItem[];
    @Input() isRefreshing: boolean;
    @Output() listItemSelected: EventEmitter<PtItem> = new EventEmitter<PtItem>();
    @Output() listRefreshRequested: EventEmitter<void> = new EventEmitter<void>();

    constructor() { }

    public listItemTap(args: ItemEventData) {
        const lv = args.object;
        const item = <PtItem>(<any>lv).items[args.index];
        this.listItemSelected.emit(item);
    }

    public refreshList() {
        this.listRefreshRequested.emit();
    }
}
