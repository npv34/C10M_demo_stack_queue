interface IQueue<T> {
    enqueue(element: T): void;
    dequeue(): T | undefined;
    size(): number;
    isFull(): boolean;
    isEmpty(): boolean;
}

export default IQueue;