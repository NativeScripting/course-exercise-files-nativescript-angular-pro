import { PtItem, PtUser } from '../models/domain';
import { PresetType } from '../../shared/models/ui/types/presets';

export type StateKey = 'backlogItems' | 'users' | 'currentUser' | 'currentSelectedItem' | 'selectedPreset';

export interface State {
    backlogItems: PtItem[];
    users: PtUser[];
    currentUser: PtUser;
    currentSelectedItem: PtItem;
    selectedPreset: PresetType;
    [key: string]: any;
}

export const INITIAL_STATE: State = {
    backlogItems: [],
    users: [],
    currentUser: undefined,
    currentSelectedItem: undefined,
    selectedPreset: 'open'
};
