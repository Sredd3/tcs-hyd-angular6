"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Product = /** @class */ (function () {
    function Product(_name, _price, _desc) {
        this._name = _name;
        this._price = _price;
        this._desc = _desc;
    }
    Product.prototype.getDescription = function () { return this._desc; };
    ;
    Product.prototype.getName = function () { return this._name; };
    ;
    return Product;
}());
exports.Product = Product;
