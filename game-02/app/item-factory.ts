import { Item } from "./item";
import { BackstageItem } from "./backstage-item";
import { ConjuredItem } from "./conjured-items";
import { NormalItem } from "./normal-item";
import { SulfurasItem } from "./sulfuras-item";
import { AgedItem } from "./aged-item";
import { UnknowsItem } from "./unknown-item";


export class ItemFactory {

    constructor() { }

    getItem(name: string, sellIn: number, quality: number): Item {
        if (name === 'normal') return new NormalItem(name, sellIn, quality);
        else if (name === 'Aged Brie') return new AgedItem(name, sellIn, quality);
        else if (name === 'Sulfuras, Hand of Ragnaros') return new SulfurasItem(name, sellIn, quality);
        else if (name === 'Backstage passes to a TAFKAL80ETC concert') return new BackstageItem(name, sellIn, quality);
        else if (name === 'Conjured Mana Cake') return new ConjuredItem(name, sellIn, quality);
        else return new UnknowsItem(name, sellIn, quality);
    }
}