import {
    Component, OnInit, ChangeDetectionStrategy,
    Input
} from '@angular/core';

import { PtItem } from '../../../../../core/models/domain';
import { PtItemDetailsEditFormModel, ptItemToFormModel } from '../../../../../shared/models/forms';

@Component({
    moduleId: module.id,
    selector: 'pt-item-details',
    templateUrl: 'pt-item-details.component.html',
    styleUrls: ['pt-item-details.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PtItemDetailsComponent implements OnInit {

    @Input() item: PtItem;

    public itemForm: PtItemDetailsEditFormModel;

    constructor() { }

    ngOnInit() {
        this.itemForm = ptItemToFormModel(this.item);
    }
}
