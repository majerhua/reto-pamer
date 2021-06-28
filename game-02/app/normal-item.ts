import { Item } from './item';

export class NormalItem implements Item {
    name: string;
    quality: number;
    sellIn: number;

    constructor(name: string, quality: number, sellIn: number) {
        this.name = name;
        this.quality = quality;
        this.sellIn = sellIn;

        if (this.quality > 0) this.quality -= 1

        this.sellIn -= 1;

        if (this.sellIn < 0) {
            if (this.quality > 0) {
                this.quality -= 1
            }
        }
    }
}