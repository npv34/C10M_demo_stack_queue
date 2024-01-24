import Queue from "./src/queue/Queue";
import Person from "./src/queue/Person";

const myQueue: Queue<Person> = new Queue(5);
const nam: Person = new Person("Nam", 20);
const hung: Person = new Person("Hung", 28);
const quan: Person = new Person("Quan", 30);

myQueue.enqueue(nam);
myQueue.enqueue(quan);
myQueue.enqueue(hung);

console.log("---Person first: ");
console.table(myQueue.dequeue());

console.log("---Person second: ");
console.table(myQueue.dequeue());

console.log("---Person third: ");
console.table(myQueue.dequeue());
