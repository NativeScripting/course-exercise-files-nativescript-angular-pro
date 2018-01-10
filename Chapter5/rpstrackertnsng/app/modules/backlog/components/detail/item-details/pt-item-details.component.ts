import {
    Component, OnInit, ChangeDetectionStrategy,
    Input, Output, EventEmitter, ViewChild
} from '@angular/core';

import { DataFormEventData } from 'nativescript-pro-ui/dataform';
import { RadDataFormComponent } from 'nativescript-pro-ui/dataform/angular';

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
    @Output() itemSaved = new EventEmitter<PtItem>();
    @ViewChild('itemDetailsDataForm') itemDetailsDataForm: RadDataFormComponent;

    public itemForm: PtItemDetailsEditFormModel;

    constructor() { }

    public ngOnInit() {
        this.itemForm = ptItemToFormModel(this.item);
    }

    public onPropertyCommitted() {
        this.notifyUpdateItem();
    }

    private notifyUpdateItem() {
        this.itemDetailsDataForm.dataForm.validateAll()
            .then(ok => {
                if (ok) {
                    const updatedItem = this.getUpdatedItem();
                    this.itemSaved.emit(updatedItem);
                }
            })
            .catch(err => console.error(err));
    }

    private getUpdatedItem(): PtItem {
        const updatedItem = Object.assign({}, this.item, {
            title: this.itemForm.title
        });
        return updatedItem;
    }
}
