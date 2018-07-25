import { PtObjectBase, PtUser } from './';

export interface PtComment extends PtObjectBase {
    user: PtUser;
}
