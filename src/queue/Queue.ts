import IQueue from "./IQueue";

class Queue<T> implements IQueue<T>{

    private _limit: number;
    private _container: Array<T>;

    constructor(limit: number) {
        this._container = [];
        this._limit = limit;
    }
    dequeue(): T | undefined {
        if (this.isEmpty()) {
            throw new Error("Queue is empty")
        }
        return this._container.shift();
    }

    enqueue(element: T): void {
        if (this.isFull()) {
            throw  new Error("Cannot enqueue because queue is full");
        }
        this._container.push(element);
    }

    isEmpty(): boolean {
        return this.size() === 0;
    }

    isFull(): boolean {
        return this.size() == this._limit;
    }

    size(): number {
        return this._container.length;
    }

}

export default Queue;