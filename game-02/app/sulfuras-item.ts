import { Item } from './item';

export class SulfurasItem implements Item {
    name: string;
    quality: number;
    sellIn: number;

    constructor(name: string, quality: number, sellIn: number) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}