import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { PtModalComponentBase } from '../pt-modal-component-base';
import { ModalDialogParams } from 'nativescript-angular';
import { Page } from 'ui/page';


@Component({
    moduleId: module.id,
    selector: 'pt-text-input-modal',
    templateUrl: 'text-input.modal.component.html',
    styleUrls: ['text-input.modal.component.css']
})
export class TextInputModalComponent extends PtModalComponentBase<string, string> implements AfterViewInit {

    public theText: string;
    public modalTitle: string;
    public okText: string;
    @ViewChild('theTextView') theTextView: ElementRef;

    constructor(
        params: ModalDialogParams,
        page: Page
    ) {
        super(params, page);
        this.theText = this.modalContext.payload;
        this.modalTitle = this.modalContext.title;
        this.okText = this.modalContext.btnOkText;
    }

    public ngAfterViewInit() {
        setTimeout(() => {
            // set focus to textview
            this.theTextView.nativeElement.focus();
        }, 600);
    }

    public onOkButtonTap() {
        this.closeCallback(this.theText);
    }

    public onCancelButtonTap(): void {
        this.closeCallback(this.modalContext.payload);
    }

}
