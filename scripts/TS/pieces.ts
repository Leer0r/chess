interface position {
    x: number
    y: number
}

export interface pieceInit {
    side: number
    position: position
    HTMLLink: HTMLDivElement
}

interface pieceInterface {
    play(newPosition: number): void;
    playPos(newPosition: position): void;
}

export class piece implements pieceInterface {
    private position: position
    private playableCase: Array<position>
    private side: number
    private pieceMove: Array<position>
    HTMLLink: HTMLDivElement;
    constructor(init: pieceInit) {
        this.position = init.position;
        this.side = init.side;
        this.playableCase = new Array<position>;
        this.HTMLLink = init.HTMLLink;
    }
    play(newPosition: number): void { //Play one of the possibility on the playableCase array
        if (newPosition < this.playableCase.length || newPosition >= 0) {
            this.position = this.playableCase[newPosition]
        }
    }
    playPos(newPosition: position): void { //Place the piece on the new position
        this.position = newPosition
    }
    getPieceMove(): Array<position> {
        return this.pieceMove
    }
    clicked():void{
        console.log("HI !")
    }
}

class pawn extends piece {

}

class bishop extends piece {

}

class rook extends piece {

}

class king extends piece {

}

class queen extends piece {

}

class knigth extends piece {

}

class empty extends piece{

}

export type Pieces = {
    pawn: pawn,
    bishop: bishop,
    rook: rook,
    king: king,
    queen: queen,
    knigth: knigth,
    empty:empty,
}

export const pieces = {
    pawn: pawn,
    bishop: bishop,
    rook: rook,
    king: king,
    queen: queen,
    knigth: knigth,
    empty:empty
};

export type Piece<T extends keyof Pieces> = Pieces[T];

export function createPiece<K extends keyof Pieces>(pieceName: K,options?: pieceInit): Piece<K> {
    return new pieces[pieceName](options);
}