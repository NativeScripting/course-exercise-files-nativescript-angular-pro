import { PtItem, PtUser } from '../models/domain';
import { PresetType } from '../../shared/models/ui/types/presets';

export type StateKey = 'backlogItems' | 'currentUser' | 'currentSelectedItem' | 'selectedPreset';

export interface State {
    backlogItems: PtItem[];
    currentUser: PtUser;
    currentSelectedItem: PtItem;
    selectedPreset: PresetType;
    [key: string]: any;
}

export const INITIAL_STATE: State = {
    backlogItems: [],
    currentUser: undefined,
    currentSelectedItem: undefined,
    selectedPreset: 'open'
};
