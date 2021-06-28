import { Item } from './item';

export class BackstageItem implements Item {
    name: string;
    quality: number;
    sellIn: number;

    constructor(name: string, quality: number, sellIn: number) {
        this.name = name;
        this.quality = quality;
        this.sellIn = sellIn;


        if (this.quality < 50) {
            this.quality += 1
            if (this.sellIn < 6) this.quality += 2
            else if (this.sellIn < 11) this.quality += 1
        }

        this.sellIn -= 1;

        if (this.sellIn < 0) this.quality = 0

    }
}