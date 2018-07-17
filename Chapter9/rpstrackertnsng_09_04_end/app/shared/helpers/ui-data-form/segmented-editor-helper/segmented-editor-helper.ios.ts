import { Color } from 'color';

export function setSegmentedEditorColor(editor, color: Color): void {
    const coreEditor = <UISegmentedControl>editor.editor;
    coreEditor.tintColor = color.ios;
}
