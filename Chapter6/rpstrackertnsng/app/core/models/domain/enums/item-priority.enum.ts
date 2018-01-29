import { Color } from 'tns-core-modules/color';

export enum PriorityEnum {
    Low = 'Low',
    Medium = 'Medium',
    High = 'High',
    Critical = 'Critical'
}
export namespace PriorityEnum {
    export function isMax(priority: PriorityEnum): boolean {
        return priority === PriorityEnum.Critical;
    }
    export function isMin(priority: PriorityEnum): boolean {
        return priority === PriorityEnum.Low;
    }
    export function nextPriority(priority: PriorityEnum): PriorityEnum {
        switch (priority) {
            case PriorityEnum.Critical:
                return undefined;
            case PriorityEnum.High:
                return PriorityEnum.Critical;
            case PriorityEnum.Medium:
                return PriorityEnum.High;
            case PriorityEnum.Low:
                return PriorityEnum.Medium;
        }
    }
    export function previousPriority(priority: PriorityEnum): PriorityEnum {
        switch (priority) {
            case PriorityEnum.Critical:
                return PriorityEnum.High;
            case PriorityEnum.High:
                return PriorityEnum.Medium;
            case PriorityEnum.Medium:
                return PriorityEnum.Low;
            case PriorityEnum.Low:
                return undefined;
        }
    }
    export function getIndicatorClass(priority: PriorityEnum): string {
        switch (priority) {
            case PriorityEnum.Critical:
                return 'indicator-priority critical';
            case PriorityEnum.High:
                return 'indicator-priority high';
            case PriorityEnum.Medium:
                return 'indicator-priority medium';
            case PriorityEnum.Low:
                return 'indicator-priority low';
            default:
                return '';
        }
    }
    export function getColor(priority: PriorityEnum): Color {
        switch (priority) {
            case PriorityEnum.Critical:
                return new Color('#820101');
            case PriorityEnum.High:
                return new Color('#b27100');
            case PriorityEnum.Medium:
                return new Color('#0c6d00');
            case PriorityEnum.Low:
                return new Color('#002b6d');
        }
    }
}
