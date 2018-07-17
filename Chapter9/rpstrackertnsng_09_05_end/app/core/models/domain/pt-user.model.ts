import { PtObjectBase } from './';
import { GenderEnum } from './enums';


export interface PtUser extends PtObjectBase {
    fullName: string;
    avatar: string;
    gender: GenderEnum;
}
