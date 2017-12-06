import { PtUser } from './domain';
import { GenderEnum } from './domain/enums';
import { PtUserAuthInfo } from './pt-user-auth-info';

export interface PtUserWithAuth extends PtUser {
    authInfo?: PtUserAuthInfo;
}
