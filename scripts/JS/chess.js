import { createPiece } from "./pieces.js";
class chessPlate {
    constructor() {
        this.chessSize = {
            h: 8,
            w: 8
        };
        this.chessBoard = new Array;
        for (let width = 0; width < this.chessSize.w; width++) {
            this.chessBoard[width] = new Array;
            for (let heigth = 0; heigth < this.chessSize.w; heigth++) {
                this.chessBoard[width][heigth] = null;
            }
        }
        this.chessContainer = document.querySelector(".chessContainer");
        this.createChessPlate(this.chessSize.w, this.chessSize.h);
    }
    addNewPiece(x, y, pieceToCreate, options) {
        this.chessBoard[x][y] = createPiece(pieceToCreate, options);
    }
    createChessPlate(x, y) {
        const chessBoard = document.createElement("div");
        chessBoard.classList.add("chessBoard");
        for (let width = 0; width < this.chessSize.w; width++) {
            const chessLine = document.createElement("div");
            chessLine.classList.add("chessLine");
            for (let height = 0; height < this.chessSize.h; height++) {
                const chessCase = document.createElement("div");
                chessCase.classList.add("case", `case${(width + height) % 2}`);
                if (width == 1 || width == this.chessSize.w - 2) { //Black pawn
                    if (width == 1) {
                        chessCase.classList.add("pawnB");
                    }
                    else { //White pawn
                        chessCase.classList.add("pawnW");
                    }
                    this.addNewPiece(width, height, "pawn", {
                        HTMLLink: chessCase,
                        position: { x: width, y: height },
                        side: (width + height) % 2
                    });
                }
                else if (width == 0) { //First rage of pown
                }
                else if (width == this.chessSize.w - 1) {
                }
                chessCase.addEventListener("click", () => {
                    if (this.chessBoard[width][height] != null) {
                        this.chessBoard[width][height].clicked();
                    }
                });
                chessLine.appendChild(chessCase);
            }
            chessBoard.appendChild(chessLine);
        }
        this.chessContainer?.appendChild(chessBoard);
    }
}
const plate = new chessPlate();
