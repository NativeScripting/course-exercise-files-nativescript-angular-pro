import { PtItem } from '../../../core/models/domain';

export interface PtItemDetailsEditFormModel {
    title: string;
    /*
    description: string;
    typeStr: string;
    statusStr: string;
    estimate: number;
    priorityStr: string;
    */
}

export function ptItemToFormModel(item: PtItem): PtItemDetailsEditFormModel {
    return {
        title: item.title
    };
}
