import { PtTask } from '../../../core/models/domain';

export interface PtTaskUpdate {
    task: PtTask;
    toggle: boolean;
    newTitle?: string;
}
