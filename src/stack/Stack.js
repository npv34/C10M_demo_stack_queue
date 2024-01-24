"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Stack = /** @class */ (function () {
    function Stack(limit) {
        this._container = [];
        this._limit = limit;
    }
    Stack.prototype.peek = function () {
        return undefined;
    };
    Stack.prototype.pop = function () {
        if (this.isEmpty()) {
            throw new Error("Stack is empty");
        }
        this._container.pop();
    };
    Stack.prototype.push = function (e) {
        if (this.isFull()) {
            throw new Error("Cannot push stack because it is full");
        }
        this._container.push(e);
    };
    Stack.prototype.size = function () {
        return this._container.length;
    };
    Stack.prototype.isFull = function () {
        return this.size() == this._limit;
    };
    Stack.prototype.isEmpty = function () {
        return this.size() == 0;
    };
    Stack.prototype.readData = function () {
        console.table(this._container);
    };
    return Stack;
}());
exports.default = Stack;
