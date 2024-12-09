import { Item, GildedRose } from '@/gilded-rose';

describe('Gilded Rose', () => {
  it('golden master', () => {
    const items = [
      new Item("Dexterity Vest", 10, 20),
      new Item("Aged Brie", 2, 0),
      new Item("Elixir of the Mongoose", 5, 7),
      new Item("Sulfuras, Hand of Ragnaros", 0, 80),
      new Item("Sulfuras, Hand of Ragnaros", -1, 80),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10),
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 10),
      new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49)
    ];
    const gildedRose = new GildedRose(items);

    gildedRose.updateQuality();

    expect(JSON.stringify(items, null, 2)).toEqual(
      `[
  {
    "name": "Dexterity Vest",
    "sellIn": 9,
    "quality": 19
  },
  {
    "name": "Aged Brie",
    "sellIn": 1,
    "quality": 1
  },
  {
    "name": "Elixir of the Mongoose",
    "sellIn": 4,
    "quality": 6
  },
  {
    "name": "Sulfuras, Hand of Ragnaros",
    "sellIn": 0,
    "quality": 80
  },
  {
    "name": "Sulfuras, Hand of Ragnaros",
    "sellIn": -1,
    "quality": 80
  },
  {
    "name": "Backstage passes to a TAFKAL80ETC concert",
    "sellIn": 9,
    "quality": 12
  },
  {
    "name": "Backstage passes to a TAFKAL80ETC concert",
    "sellIn": 4,
    "quality": 13
  },
  {
    "name": "Backstage passes to a TAFKAL80ETC concert",
    "sellIn": 14,
    "quality": 21
  },
  {
    "name": "Backstage passes to a TAFKAL80ETC concert",
    "sellIn": 9,
    "quality": 50
  },
  {
    "name": "Backstage passes to a TAFKAL80ETC concert",
    "sellIn": 4,
    "quality": 50
  }
]`);
  });
});
