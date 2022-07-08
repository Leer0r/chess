var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var piece = /** @class */ (function () {
    function piece(init) {
        this.position = init.position;
        this.side = init.side;
        this.playableCase = new Array;
    }
    piece.prototype.play = function (newPosition) {
        if (newPosition < this.playableCase.length || newPosition >= 0) {
            this.position = this.playableCase[newPosition];
        }
    };
    piece.prototype.playPos = function (newPosition) {
        this.position = newPosition;
    };
    return piece;
}());
var pawn = /** @class */ (function (_super) {
    __extends(pawn, _super);
    function pawn() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return pawn;
}(piece));
var bishop = /** @class */ (function (_super) {
    __extends(bishop, _super);
    function bishop() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return bishop;
}(piece));
var rook = /** @class */ (function (_super) {
    __extends(rook, _super);
    function rook() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return rook;
}(piece));
var king = /** @class */ (function (_super) {
    __extends(king, _super);
    function king() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return king;
}(piece));
var queen = /** @class */ (function (_super) {
    __extends(queen, _super);
    function queen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return queen;
}(piece));
var knigth = /** @class */ (function (_super) {
    __extends(knigth, _super);
    function knigth() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return knigth;
}(piece));
