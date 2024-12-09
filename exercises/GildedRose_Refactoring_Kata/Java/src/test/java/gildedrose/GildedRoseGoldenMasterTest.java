package gildedrose;

import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;

public class GildedRoseGoldenMasterTest {

    @Test
    public void golden_master() {
        Item[] items = new Item[]{
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
        };

        GildedRose gildedRose = new GildedRose(items);

        gildedRose.updateQuality();

        assertThat(gildedRose.toString()).isEqualTo("""
                Dexterity Vest, 9, 19
                Aged Brie, 1, 1
                Elixir of the Mongoose, 4, 6
                Sulfuras, Hand of Ragnaros, 0, 80
                Sulfuras, Hand of Ragnaros, -1, 80
                Backstage passes to a TAFKAL80ETC concert, 9, 12
                Backstage passes to a TAFKAL80ETC concert, 4, 13
                Backstage passes to a TAFKAL80ETC concert, 14, 21
                Backstage passes to a TAFKAL80ETC concert, 9, 50
                Backstage passes to a TAFKAL80ETC concert, 4, 50
                """);
    }

}
