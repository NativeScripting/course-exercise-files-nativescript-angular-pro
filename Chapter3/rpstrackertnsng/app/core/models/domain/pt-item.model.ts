import { PtObjectBase, PtTask, PtComment, PtUser } from './';
import { PriorityEnum, StatusEnum } from './enums';
import { PtItemType } from '../domain/types';

export interface PtItem extends PtObjectBase {
    description?: string;
    type: PtItemType;
    estimate: number;
    priority: PriorityEnum;
    status: StatusEnum;
    assignee: PtUser;
    tasks: PtTask[];
    comments: PtComment[];
}
