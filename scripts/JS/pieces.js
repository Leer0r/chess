export class piece {
    constructor(init) {
        this.position = init.position;
        this.side = init.side;
        this.playableCase = new Array;
        this.HTMLLink = init.HTMLLink;
    }
    play(newPosition) {
        if (newPosition < this.playableCase.length || newPosition >= 0) {
            this.position = this.playableCase[newPosition];
        }
    }
    playPos(newPosition) {
        this.position = newPosition;
    }
    getPieceMove() {
        return this.pieceMove;
    }
    clicked() {
        console.log("HI !");
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
class empty extends piece {
}
export const pieces = {
    pawn: pawn,
    bishop: bishop,
    rook: rook,
    king: king,
    queen: queen,
    knigth: knigth,
    empty: empty
};
export function createPiece(pieceName, options) {
    return new pieces[pieceName](options);
}
