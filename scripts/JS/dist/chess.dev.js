"use strict";

var chessContainer = document.querySelector(".chessContainer");

function createChessPlate(w, h) {
  var chessBoard = document.createElement("div");
  chessBoard.classList.add("chessBoard");

  for (var width = 0; width < w; width++) {
    var chessLine = document.createElement("div");
    chessLine.classList.add("chessLine");

    for (var height = 0; height < h; height++) {
      var chessCase = document.createElement("div");
      chessCase.classList.add("case", "case" + (width + height) % 2);

      if (width == 1) {
        //Black pawn
        chessCase.classList.add("pawnB");
      } else if (width == w - 2) {
        //White pawn
        chessCase.classList.add("pawnW");
      }

      chessLine.appendChild(chessCase);
    }

    chessBoard.appendChild(chessLine);
  }

  chessContainer === null || chessContainer === void 0 ? void 0 : chessContainer.appendChild(chessBoard);
}

createChessPlate(8, 8);