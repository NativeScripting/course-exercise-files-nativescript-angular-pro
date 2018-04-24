import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { PtItem } from '../../../../core/models/domain';
import { ItemType } from '../../../../core/constants/pt-item-types';

@Component({
    moduleId: module.id,
    selector: 'pt-list-item',
    templateUrl: 'pt-list-item.component.html',
    styleUrls: ['pt-list-item.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PtListItemComponent {

    @Input() item: PtItem;

    constructor() { }

    public getIndicatorClass(item: PtItem): string {
        return ItemType.indicatorClassFromType(item.type);
    }
}
