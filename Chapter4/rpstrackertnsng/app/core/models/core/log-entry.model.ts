import { LoggingLevelEnum } from '../enums';

export interface LogEntry {
    message: string;
    level: LoggingLevelEnum;
}
