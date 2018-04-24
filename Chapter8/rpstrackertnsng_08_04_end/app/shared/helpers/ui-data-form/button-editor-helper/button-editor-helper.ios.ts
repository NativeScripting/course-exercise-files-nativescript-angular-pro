import { CustomPropertyEditor } from 'nativescript-pro-ui/dataform';


export class ButtonEditorHelper extends NSObject {

    public static ObjCExposedMethods = {
        'handleTap:': { returns: interop.types.void, params: [UIView.class()] }
    };

    public buttonValue: number;
    public editor: CustomPropertyEditor;
    public iosTapHandler;

    public updateEditorValue(editorView, newValue): void {
        this.buttonValue = newValue;
        editorView.setTitleForState(this.buttonValue, UIControlState.Normal);
    }

    public 'handleTap:'(_sender): void {
        this.iosTapHandler();
    }


}

