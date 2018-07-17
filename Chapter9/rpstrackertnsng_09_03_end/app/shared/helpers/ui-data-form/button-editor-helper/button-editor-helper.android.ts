import { CustomPropertyEditor } from 'nativescript-pro-ui/dataform';


export class ButtonEditorHelper {
    public buttonValue: string;
    public editor: CustomPropertyEditor;

    public updateEditorValue(editorView, newValue): void {
        this.buttonValue = newValue;
        editorView.setText(this.buttonValue);
    }
}
