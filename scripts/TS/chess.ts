function createChessPlate(w:number,h:number):void {
    
}

interface chessSizeInterface{
    h:number
    w:number
}

interface chessPlateInterface{
    chessContainer:HTMLDivElement | null;
    chessSize:chessSizeInterface
    chessBoardHTML:Array<Array<HTMLDivElement>>
    createChessPlate(x:number,y:number);
}

class chessPlate implements chessPlateInterface {
    chessContainer: HTMLDivElement | null;
    chessSize: chessSizeInterface = {
        h:8,
        w:8
    };
    chessBoardHTML = new Array<Array<HTMLDivElement>>;
    constructor(){
        this.chessContainer = document.querySelector(".chessContainer") as HTMLDivElement | null;
        this.createChessPlate(this.chessSize.w,this.chessSize.h)
    }
    createChessPlate(x: number, y: number) {
        const chessBoard:HTMLDivElement = document.createElement("div");
        chessBoard.classList.add("chessBoard");
        for(let width = 0; width < this.chessSize.w; width++){
            const chessLine:HTMLDivElement = document.createElement("div");
            chessLine.classList.add("chessLine")
            for(let height = 0; height < this.chessSize.h; height ++){
                const chessCase:HTMLDivElement = document.createElement("div")
                chessCase.classList.add("case",`case${(width + height)%2}`)
                if(width == 1){ //Black pawn
                    chessCase.classList.add("pawnB")
                }
                else if(width == this.chessSize.w - 2){ //White pawn
                    chessCase.classList.add("pawnW")
                }
                else if(width == 0){ //First rage of pown

                }

                else if(width == this.chessSize.w - 1){

                }
                chessLine.appendChild(chessCase);
            }
            chessBoard.appendChild(chessLine);
        }
        this.chessContainer?.appendChild(chessBoard);
    }
}

const plate:chessPlate = new chessPlate();