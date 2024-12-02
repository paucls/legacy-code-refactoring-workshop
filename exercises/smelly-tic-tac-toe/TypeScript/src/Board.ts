import {Tile} from "./Tile";

export class Board {
    private _plays: Tile[] = [];

    constructor() {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                const tile: Tile = {x: i, y: j, symbol: ' '};
                this._plays.push(tile);
            }
        }
    }

    public tileAt(x: number, y: number): Tile {
        return this._plays.find((t: Tile) => t.x == x && t.y == y)!;
    }

    public addTileAt(symbol: string, x: number, y: number): void {
        const tile: Tile = {x: x, y: y, symbol: symbol};

        this._plays.find((t: Tile) => t.x == x && t.y == y)!.symbol = symbol;
    }
}