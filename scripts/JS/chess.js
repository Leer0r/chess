function createChessPlate(w, h) {
}
var chessPlate = /** @class */ (function () {
    function chessPlate() {
        this.chessSize = {
            h: 8,
            w: 8
        };
        this.chessBoardHTML = new Array;
        this.chessContainer = document.querySelector(".chessContainer");
        this.createChessPlate(this.chessSize.w, this.chessSize.h);
    }
    chessPlate.prototype.createChessPlate = function (x, y) {
        var _a;
        var chessBoard = document.createElement("div");
        chessBoard.classList.add("chessBoard");
        for (var width = 0; width < this.chessSize.w; width++) {
            var chessLine = document.createElement("div");
            chessLine.classList.add("chessLine");
            for (var height = 0; height < this.chessSize.h; height++) {
                var chessCase = document.createElement("div");
                chessCase.classList.add("case", "case" + (width + height) % 2);
                if (width == 1) { //Black pawn
                    chessCase.classList.add("pawnB");
                }
                else if (width == this.chessSize.w - 2) { //White pawn
                    chessCase.classList.add("pawnW");
                }
                else if (width == 0) { //First rage of pown
                }
                else if (width == this.chessSize.w - 1) {
                }
                chessLine.appendChild(chessCase);
            }
            chessBoard.appendChild(chessLine);
        }
        (_a = this.chessContainer) === null || _a === void 0 ? void 0 : _a.appendChild(chessBoard);
    };
    return chessPlate;
}());
var plate = new chessPlate();
