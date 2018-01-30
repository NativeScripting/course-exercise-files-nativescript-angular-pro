import { Component, ViewContainerRef } from "@angular/core";
import { ModalDialogService, ModalDialogOptions } from "nativescript-angular/modal-dialog";
import { ModalComponent } from "./modal-dialog";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})
export class AppComponent {

    constructor(
        private modalService: ModalDialogService,
        private vcRef: ViewContainerRef
    ) { }

    public openModal() {
        const options: ModalDialogOptions = {
            context: 'Hello ',
            fullscreen: true,
            viewContainerRef: this.vcRef
        };

        this.modalService.showModal(ModalComponent, options)
            .then(res => {
                console.log(res);
            });
    }
}
