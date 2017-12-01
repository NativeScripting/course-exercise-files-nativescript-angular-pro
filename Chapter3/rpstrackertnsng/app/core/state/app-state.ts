import { PtItem, PtUser } from '../models/domain';

export type StateKey = 'backlogItems' | 'currentUser';

export interface State {
    backlogItems: PtItem[];
    currentUser: PtUser;
    [key: string]: any;
}

export const INITIAL_STATE: State = {
    backlogItems: [],
    currentUser: undefined
};
