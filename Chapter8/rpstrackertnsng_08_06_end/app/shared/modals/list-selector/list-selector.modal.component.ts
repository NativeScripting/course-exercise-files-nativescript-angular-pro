import { Component } from '@angular/core';

import { ModalDialogParams } from 'nativescript-angular';
import { Page } from 'ui/page';

import { PtModalComponentBase } from '../pt-modal-component-base';
import { PtModalListModel } from '../../models/ui/pt-modal-list.model';
import { PtModalListDisplayItem } from '../../models/ui/pt-modal-list-display-item.model';

@Component({
    moduleId: module.id,
    selector: 'pt-list-selector-modal',
    templateUrl: 'list-selector.modal.component.html',
    styleUrls: ['list-selector.modal.component.css']
})
export class ListSelectorModalComponent<T>
    extends PtModalComponentBase<PtModalListModel<PtModalListDisplayItem<T>>, PtModalListDisplayItem<T>> {
    public items: PtModalListDisplayItem<T>[] = [];
    private originalSelectedItem: PtModalListDisplayItem<T>;
    private selectedItem: PtModalListDisplayItem<T>;

    constructor(
        params: ModalDialogParams,
        page: Page
    ) {
        super(params, page);
        if (this.payload.selectedItem) {
            this.originalSelectedItem = this.payload.selectedItem;
            this.selectedItem = this.payload.selectedItem;
        }
        this.items = this.payload.items;
    }

    public onItemSelected(args): void {
        const newSelectedItem = this.items[args.index];
        newSelectedItem.isSelected = true;
        this.closeCallback(newSelectedItem.payload);
    }

    public onCancelButtonTap(): void {
        this.closeCallback(this.modalContext.defaultResult);
    }
}
