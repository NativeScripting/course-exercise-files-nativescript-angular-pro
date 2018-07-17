import { Component } from '@angular/core';

import { ModalDialogParams } from 'nativescript-angular';
import { Page } from 'ui/page';

import { PtModalComponentBase } from '../../../../shared/modals/pt-modal-component-base';
import { PtNewItemForm } from '../../../../shared/models/forms';
import { PtNewItem } from '../../../../shared/models/dto';
import { PtItemType } from '../../../../core/models/domain/types';

@Component({
    moduleId: module.id,
    selector: 'pt-new-item-modal',
    templateUrl: 'new-item.modal.component.html'
})
export class NewItemModalComponent extends PtModalComponentBase<null, PtNewItem> {

    constructor(
        params: ModalDialogParams,
        page: Page
    ) {
        super(params, page);
    }

    public onFormSaved(newItemForm: PtNewItemForm) {
        const newItem: PtNewItem = {
            title: newItemForm.title,
            description: newItemForm.description,
            type: <PtItemType>newItemForm.typeStr
        };

        this.closeCallback(newItem);
    }

    public onFormCancelled(): void {
        this.closeCallback(this.modalContext.defaultResult);
    }
}
