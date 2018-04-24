export function setPickerEditorImageLocation(editor): void {
    const labelDef = editor.gridLayout.definitionForView(editor.textLabel);
    const imageDef = editor.gridLayout.definitionForView(editor.imageView);
    labelDef.column = 0;
    imageDef.column = 1;
}

export function getPickerEditorValueText(editor): string {
    return editor.editorValueLabel.text;
}
