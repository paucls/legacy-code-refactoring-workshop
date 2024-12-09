import { Item, GildedRose } from '@/gilded-rose';

describe('Gilded Rose', () => {
  it('quality and sellIn decreases by 1', () => {
    const items = [new Item('An Item', 1, 10)];
    const gildedRose = new GildedRose(items);

    gildedRose.updateQuality();

    expect(items[0].sellIn).toBe(0);
    expect(items[0].quality).toBe(9);
  });

  it('once the sell by date has passed, quality decreases twice as fast', () => {
    const items = [new Item('An Item', 0, 10)];
    const gildedRose = new GildedRose(items);

    gildedRose.updateQuality();

    expect(items[0].quality).toBe(8);
  });

  it('the quality of an item is never negative', () => {
    const items = [new Item('An Item', 0, 0)];
    const gildedRose = new GildedRose(items);

    gildedRose.updateQuality();

    expect(items[0].quality).toBe(0);
  });

  it('Aged Brie increases in quality the older it gets', () => {
    const items = [new Item('Aged Brie', 1, 10)];
    const gildedRose = new GildedRose(items);

    gildedRose.updateQuality();

    expect(items[0].quality).toBe(11);
  });

  it('Aged Brie when sellIn expires', () => {
    const items = [new Item('Aged Brie', 0, 10)];
    const gildedRose = new GildedRose(items);

    gildedRose.updateQuality();

    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(12);
  });

  it('the quality of an item is never more than 50', () => {
    const items = [new Item('Aged Brie', 1, 50)];
    const gildedRose = new GildedRose(items);

    gildedRose.updateQuality();

    expect(items[0].quality).toBe(50);
  });

  it('Sulfuras never has to be sold or decreases in quality', () => {
    const items = [new Item('Sulfuras, Hand of Ragnaros', 1, 80)];
    const gildedRose = new GildedRose(items);

    gildedRose.updateQuality();

    expect(items[0].quality).toBe(80);
  });

  it('Backstage passes increases in quality by 2 when there are 10 days or less', () => {
    const items = [new Item('Backstage passes to a TAFKAL80ETC concert', 10, 10)];
    const gildedRose = new GildedRose(items);

    gildedRose.updateQuality();

    expect(items[0].quality).toBe(12);
  });

  it('Backstage passes increases in quality by 3 when there are 5 days or less', () => {
    const items = [new Item('Backstage passes to a TAFKAL80ETC concert', 5, 10)];
    const gildedRose = new GildedRose(items);

    gildedRose.updateQuality();

    expect(items[0].quality).toBe(13);
  });

  it('Backstage passes drops quality to 0 after concert', () => {
    const items = [new Item('Backstage passes to a TAFKAL80ETC concert', 0, 10)];
    const gildedRose = new GildedRose(items);

    gildedRose.updateQuality();

    expect(items[0].quality).toBe(0);
  });
});
