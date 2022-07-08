interface position {
    x:number
    y:number
}

interface pieceInit{
    side:number
    position:position
}

class piece {
    private position:position
    private playableCase: Array<position>
    private side:number
    constructor(init:pieceInit){
        this.position = init.position
        this.side = init.side
        this.playableCase = new Array<position>
    }
    play(newPosition:number):void { //Play one of the possibility on the playableCase array
        if(newPosition < this.playableCase.length || newPosition >= 0){
            this.position = this.playableCase[newPosition]
        }
    }
    playPos(newPosition:position):void { //Place the piece on the new position
        this.position = newPosition
    }


}

class pawn extends piece{
}

class bishop extends piece{

}

class rook extends piece{

}

class king extends piece{

}

class queen extends piece{

}

class knigth extends piece{

}

interface pieces {
    "pawn":pawn
    "bishop":bishop
    "rook":rook
    "king":king
    "queen":queen
    "knigth":knigth
}