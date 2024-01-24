interface IStack<T> {
    push(e: T): void;
    pop(): void;
    peek(): T;
    size(): number;
    isFull(): boolean;
    isEmpty(): boolean;
    readData(): void;
}

export default IStack;