import java.util.ArrayList;
import java.util.List;

public class Board {
    private List<Tile> plays = new ArrayList<>();

    public Board() {
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                Tile tile = new Tile();
                tile.x = i;
                tile.y = j;
                tile.symbol = ' ';
                plays.add(tile);
            }
        }
    }

    public Tile tileAt(int x, int y) {
        for (Tile t : plays) {
            if (t.x == x && t.y == y) {
                return t;
            }
        }
        return null;
    }

    public void addTileAt(char symbol, int x, int y) {
        Tile newTile = new Tile();
        newTile.x = x;
        newTile.y = y;
        newTile.symbol = symbol;

        tileAt(x, y).symbol = symbol;
    }
}