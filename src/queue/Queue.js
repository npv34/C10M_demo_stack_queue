"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Queue = /** @class */ (function () {
    function Queue(limit) {
        this._container = [];
        this._limit = limit;
    }
    Queue.prototype.dequeue = function () {
        if (this.isEmpty()) {
            throw new Error("Queue is empty");
        }
        return this._container.shift();
    };
    Queue.prototype.enqueue = function (element) {
        if (this.isFull()) {
            throw new Error("Cannot enqueue because queue is full");
        }
        this._container.push(element);
    };
    Queue.prototype.isEmpty = function () {
        return this.size() === 0;
    };
    Queue.prototype.isFull = function () {
        return this.size() == this._limit;
    };
    Queue.prototype.size = function () {
        return this._container.length;
    };
    return Queue;
}());
exports.default = Queue;
