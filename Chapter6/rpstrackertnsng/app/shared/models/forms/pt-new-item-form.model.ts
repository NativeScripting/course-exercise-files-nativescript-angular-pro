import { EMPTY_STRING } from '../../../core/helpers/string-helpers';

export interface PtNewItemForm {
    title: string;
    description?: string;
    typeStr: string;
}

export function initializeNewItemForm() {
    return {
        title: EMPTY_STRING,
        description: EMPTY_STRING,
        typeStr: EMPTY_STRING
    };
}
