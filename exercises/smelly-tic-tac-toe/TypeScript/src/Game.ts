import {Board} from "./Board";

export class Game {
    private _lastSymbol: string = ' ';
    private _board: Board = new Board();

    public play(symbol: string, x: number, y: number): void {
        //if first move
        if (this._lastSymbol == ' ') {
            //if player is X
            if (symbol == 'O') {
                throw new Error('Invalid first player');
            }
        }
        //if not first move but player repeated
        else if (symbol == this._lastSymbol) {
            throw new Error('Invalid next player');
        }
        //if not first move but play on an already played tile
        else if (this._board.tileAt(x, y).symbol != ' ') {
            throw new Error('Invalid position');
        }

        // update game state
        this._lastSymbol = symbol;
        this._board.addTileAt(symbol, x, y);
    }

    public winner(): string {
        //if the positions in first row are taken
        if (
            this._board.tileAt(0, 0)!.symbol != ' ' &&
            this._board.tileAt(0, 1)!.symbol != ' ' &&
            this._board.tileAt(0, 2)!.symbol != ' '
        ) {
            //if first row is full with same symbol
            if (
                this._board.tileAt(0, 0)!.symbol == this._board.tileAt(0, 1)!.symbol &&
                this._board.tileAt(0, 2)!.symbol == this._board.tileAt(0, 1)!.symbol
            ) {
                return this._board.tileAt(0, 0)!.symbol;
            }
        }

        //if the positions in first row are taken
        if (
            this._board.tileAt(1, 0)!.symbol != ' ' &&
            this._board.tileAt(1, 1)!.symbol != ' ' &&
            this._board.tileAt(1, 2)!.symbol != ' '
        ) {
            //if middle row is full with same symbol
            if (
                this._board.tileAt(1, 0)!.symbol == this._board.tileAt(1, 1)!.symbol &&
                this._board.tileAt(1, 2)!.symbol == this._board.tileAt(1, 1)!.symbol
            ) {
                return this._board.tileAt(1, 0)!.symbol;
            }
        }

        //if the positions in first row are taken
        if (
            this._board.tileAt(2, 0)!.symbol != ' ' &&
            this._board.tileAt(2, 1)!.symbol != ' ' &&
            this._board.tileAt(2, 2)!.symbol != ' '
        ) {
            //if middle row is full with same symbol
            if (
                this._board.tileAt(2, 0)!.symbol == this._board.tileAt(2, 1)!.symbol &&
                this._board.tileAt(2, 2)!.symbol == this._board.tileAt(2, 1)!.symbol
            ) {
                return this._board.tileAt(2, 0)!.symbol;
            }
        }

        return ' ';
    }
}

