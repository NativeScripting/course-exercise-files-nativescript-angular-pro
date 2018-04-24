import { Page } from 'ui/page';
import { ModalDialogParams } from 'nativescript-angular';

import { PtModalContext } from '../models/ui/pt-modal-context.model';

export class PtModalComponentBase<T, R> {
    protected modalContext: PtModalContext<T, R>;
    protected closeCallback: (...args: any[]) => any;

    public get title() {
        return this.modalContext.title;
    }

    protected get payload(): T {
        return this.modalContext.payload;
    }

    public get btnOkText() {
        return this.modalContext.btnOkText;
    }

    public get btnCancelText() {
        return this.modalContext.btnCancelText;
    }

    constructor(
        private params: ModalDialogParams,
        private page: Page
    ) {
        this.modalContext = <PtModalContext<T, R>>params.context;
        this.closeCallback = params.closeCallback;

        this.page.on('unloaded', () => {
            // using the unloaded event to close the modal when there is user interaction
            // e.g. user taps outside the modal page
            this.params.closeCallback(this.modalContext.defaultResult);
        });
    }
}
