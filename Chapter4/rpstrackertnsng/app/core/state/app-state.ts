import { PtItem, PtUser } from '../models/domain';

export type StateKey = 'backlogItems' | 'currentUser' | 'currentSelectedItem';

export interface State {
    backlogItems: PtItem[];
    currentUser: PtUser;
    currentSelectedItem: PtItem;
    [key: string]: any;
}

export const INITIAL_STATE: State = {
    backlogItems: [],
    currentUser: undefined,
    currentSelectedItem: undefined
};
