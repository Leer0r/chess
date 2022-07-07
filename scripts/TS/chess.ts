const chessContainer = document.querySelector(".chessContainer");

function createChessPlate(w:number,h:number):void {
    const chessBoard:HTMLDivElement = document.createElement("div");
    chessBoard.classList.add("chessBoard");
    for(let width = 0; width < w; width++){
        const chessLine:HTMLDivElement = document.createElement("div");
        chessLine.classList.add("chessLine")
        for(let height = 0; height < h; height ++){
            const chessCase:HTMLDivElement = document.createElement("div")
            chessCase.classList.add("case",`case${(width + height)%2}`)
            if(width == 1){ //Black pool
                chessCase.classList.add("poolB")
            }
            else if(width == w - 2){ //White pool
                chessCase.classList.add("poolW")
            }
            chessLine.appendChild(chessCase);
        }
        chessBoard.appendChild(chessLine);
    }
    chessContainer?.appendChild(chessBoard);
}

createChessPlate(8,8)