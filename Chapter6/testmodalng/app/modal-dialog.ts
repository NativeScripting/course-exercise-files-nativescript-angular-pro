import { Component } from '@angular/core';
import { ModalDialogParams } from "nativescript-angular/directives/dialogs";

@Component({
    selector: 'my-modal',
    template: `
        <StackLayout>
            <Label text="This is the modal dialog page"></Label>
            <TextField [(ngModel)]="myText"></TextField>
            <Button text="Close modal" (tap)="closeModal($event)"></Button>
        </StackLayout>
    `,
    styles: [`
        StackLayout {
            background-color: #9effef;
        }
    `]
})
export class ModalComponent {

    public myText: string;

    constructor(private mParams: ModalDialogParams) {
        this.myText = this.mParams.context;
    }

    public closeModal() {
        this.mParams.closeCallback(this.myText);
    }
}
