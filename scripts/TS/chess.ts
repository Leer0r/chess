import { pieceInit,createPiece, Piece, Pieces } from "./pieces.js"

interface chessSizeInterface {
    h: number
    w: number
}

type chessCase = Piece<keyof Pieces>;

interface chessPlateInterface {
    chessContainer: HTMLDivElement | null;
    chessSize: chessSizeInterface
    chessBoard: chessCase[][]     
    createChessPlate(x: number, y: number);
}


class chessPlate implements chessPlateInterface {
    chessContainer: HTMLDivElement | null;
    chessSize: chessSizeInterface = {
        h: 8,
        w: 8
    };
    chessBoard = new Array<Array<chessCase>>;
    
    constructor() {
        for (let width = 0; width < this.chessSize.w; width++){
            this.chessBoard[width] = new Array<chessCase>;
            for (let heigth = 0; heigth < this.chessSize.w; heigth++){
                this.chessBoard[width][heigth] = null;
            }
        }
        this.chessContainer = document.querySelector(".chessContainer") as HTMLDivElement | null;
        this.createChessPlate(this.chessSize.w, this.chessSize.h)
    }
    addNewPiece(x:number,y:number,pieceToCreate: keyof Pieces,options:pieceInit){
        this.chessBoard[x][y] = createPiece(pieceToCreate,options);
    }
    createChessPlate(x: number, y: number) {
        const chessBoard: HTMLDivElement = document.createElement("div");
        chessBoard.classList.add("chessBoard");
        for (let width = 0; width < this.chessSize.w; width++) {
            const chessLine: HTMLDivElement = document.createElement("div");
            chessLine.classList.add("chessLine")
            for (let height = 0; height < this.chessSize.h; height++) {
                const chessCase: HTMLDivElement = document.createElement("div")
                chessCase.classList.add("case", `case${(width + height) % 2}`)
                if (width == 1 || width == this.chessSize.w - 2) { //Black pawn
                    if(width == 1){
                        chessCase.classList.add("pawnB")
                    }
                    else { //White pawn
                        chessCase.classList.add("pawnW")
                    }
                    this.addNewPiece(width,height,"pawn",{
                        HTMLLink: chessCase,
                        position: {x:width,y:height},
                        side: (width + height) % 2
                    })

                }
                else if (width == 0) { //First rage of pown

                }

                else if (width == this.chessSize.w - 1) {

                }
                chessCase.addEventListener("click", () => {
                    if(this.chessBoard[width][height] != null) {
                        this.chessBoard[width][height].clicked()
                    }
                })
                chessLine.appendChild(chessCase);
            }
            chessBoard.appendChild(chessLine);
        }
        this.chessContainer?.appendChild(chessBoard);
    }
}

const plate: chessPlate = new chessPlate();