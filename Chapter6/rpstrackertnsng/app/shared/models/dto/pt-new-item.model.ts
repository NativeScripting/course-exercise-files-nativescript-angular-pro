import { PtItemType } from '../../../core/models/domain/types';

export interface PtNewItem {
    title: string;
    description?: string;
    type: PtItemType;
}
