import { Item } from './item';

export class UnknowsItem implements Item {
    name: string;
    quality: number;
    sellIn: number;

    constructor(name: string, quality: number, sellIn: number) {
        this.name = name;
        this.quality = quality;
        this.sellIn = sellIn;

    }
}