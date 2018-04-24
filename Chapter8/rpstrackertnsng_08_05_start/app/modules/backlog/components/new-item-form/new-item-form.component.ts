import { Component, Input, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

import { RadDataFormComponent } from 'nativescript-pro-ui/dataform/angular';
import { DataFormEventData } from 'nativescript-pro-ui/dataform';

import { PtItemType } from '../../../../core/models/domain/types';
import { PtNewItemForm, initializeNewItemForm } from '../../../../shared/models/forms/pt-new-item-form.model';
import { ItemType } from '../../../../core/constants/pt-item-types';
import {
    setMultiLineEditorFontSize,
    setPickerEditorImageLocation,
    getPickerEditorValueText
} from '../../../../shared/helpers/ui-data-form';

@Component({
    moduleId: module.id,
    selector: 'pt-new-item-form',
    templateUrl: 'new-item-form.component.html',
    styleUrls: ['new-item-form.component.css']
})
export class NewItemFormComponent implements OnInit {

    @Input() btnOkText = 'Save';
    @Input() btnCancelText = 'Cancel';
    @Output() formSaved = new EventEmitter<PtNewItemForm>();
    @Output() formCancelled = new EventEmitter();
    @ViewChild('itemDetailsDataForm') itemDetailsDataForm: RadDataFormComponent;

    public newItemForm: PtNewItemForm;
    public itemTypesProvider = ItemType.List.map((t) => t.PtItemType);

    private selectedTypeValue: PtItemType;

    public get itemTypeImage() {
        return ItemType.imageResFromType(this.selectedTypeValue);
    }

    public get itemTypeEditorDisplayName() {
        return 'Type';
    }

    constructor() { }

    public ngOnInit() {
        this.newItemForm = initializeNewItemForm();
    }

    public onEditorUpdate(args: DataFormEventData) {
        switch (args.propertyName) {
            case 'title': this.editorSetupMultiLine(args.editor); break;
            case 'description': this.editorSetupMultiLine(args.editor); break;
            case 'typeStr': this.editorSetupType(args.editor); break;
        }
    }

    private editorSetupMultiLine(editor) {
        setMultiLineEditorFontSize(editor, 17);
    }

    private editorSetupType(editor) {
        setPickerEditorImageLocation(editor);
        this.selectedTypeValue = <PtItemType>getPickerEditorValueText(editor);
    }

    public onSaveTap() {
        this.itemDetailsDataForm.dataForm.validateAndCommitAll()
            .then(ok => {
                if (ok) {
                    this.formSaved.emit(this.newItemForm);
                }
            });
    }

    public onCancelTap() {
        this.formCancelled.emit();
    }
}
