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
    @Output() listItemSelected: EventEmitter<PtItem> = new EventEmitter<PtItem>();

    constructor() { }

    public listItemTap(args: ItemEventData) {
        const lv = args.object;
        const item = <PtItem>(<any>lv).items[args.index];
        this.listItemSelected.emit(item);
    }

}
