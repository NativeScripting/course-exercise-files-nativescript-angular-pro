import { PtItemType } from '../../core/models/domain/types';

const PT_ITEM_TYPE_PBI: PtItemType = 'PBI';
const PT_ITEM_TYPE_BUG: PtItemType = 'Bug';
const PT_ITEM_TYPE_CHORE: PtItemType = 'Chore';
const PT_ITEM_TYPE_IMPEDIMENT: PtItemType = 'Impediment';


export class ItemType {
    private static itPbi = new ItemType(PT_ITEM_TYPE_PBI);
    private static itBug = new ItemType(PT_ITEM_TYPE_BUG);
    private static itChore = new ItemType(PT_ITEM_TYPE_CHORE);
    private static itImpediment = new ItemType(PT_ITEM_TYPE_IMPEDIMENT);

    public static get Pbi() {
        return this.itPbi;
    }

    public static get Bug() {
        return this.itBug;
    }

    public static get Chore() {
        return this.itChore;
    }

    public static get Impediment() {
        return this.itImpediment;
    }

    public static get List() {
        return [ItemType.Bug, ItemType.Pbi, ItemType.Chore, ItemType.Impediment];
    }

    public static indicatorClassFromType(ptItemType: PtItemType): string {
        switch (ptItemType) {
            case PT_ITEM_TYPE_PBI:
                return 'indicator-pbi';
            case PT_ITEM_TYPE_BUG:
                return 'indicator-bug';
            case PT_ITEM_TYPE_CHORE:
                return 'indicator-chore';
            case PT_ITEM_TYPE_IMPEDIMENT:
                return 'indicator-impediment';
            default:
                return '';
        }
    }

    public static imageResFromType(ptItemType: PtItemType): string {
        switch (ptItemType) {
            case PT_ITEM_TYPE_PBI:
                return 'res://ipbi';
            case PT_ITEM_TYPE_BUG:
                return 'res://ibug';
            case PT_ITEM_TYPE_CHORE:
                return 'res://ichore';
            case PT_ITEM_TYPE_IMPEDIMENT:
                return 'res://iimpediment';
            default:
                return '';
        }
    }

    public get PtItemType() {
        return this.ptItemType;
    }

    private constructor(private ptItemType: PtItemType) { }


    public static fromString(typeStr: string): ItemType {
        return ItemType.List.find((i) => i.PtItemType === typeStr);
    }

    public getPtTypeImage(): string {
        return ItemType.imageResFromType(this.PtItemType);
    }

    public getIndicatorClass(): string {
        return ItemType.indicatorClassFromType(this.PtItemType);
    }
}
