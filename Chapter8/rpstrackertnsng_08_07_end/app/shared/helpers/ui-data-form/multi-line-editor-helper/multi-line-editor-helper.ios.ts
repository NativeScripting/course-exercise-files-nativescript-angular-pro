export function setMultiLineEditorFontSize(editor, size: number): void {
    if (editor.textView) {
        const textViewDef = editor.gridLayout.definitionForView(editor.textView);
        if (textViewDef.view && textViewDef.view.font) {
            textViewDef.view.font = UIFont.fontWithNameSize(textViewDef.view.font.fontName, size);
        }
    }
}
