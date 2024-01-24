import IStack from "./IStack";

class Stack<T> implements IStack<T> {
    private _container: Array<T>;
    private _limit: number;

    constructor(limit: number) {
        this._container = [];
        this._limit = limit;
    }

    peek(): T {
        return undefined;
    }

    pop(): void {
        if (this.isEmpty()) {
            throw new Error("Stack is empty")
        }

        this._container.pop();
    }

    push(e: T): void {
        if (this.isFull()) {
            throw new Error("Cannot push stack because it is full");
        }

        this._container.push(e);
    }

    size(): number {
        return this._container.length;
    }

    isFull(): boolean {
        return this.size() == this._limit;
    }

    isEmpty(): boolean {
        return this.size() == 0;
    }
    readData(): void {
        console.table(this._container)
    }
}

export default Stack;