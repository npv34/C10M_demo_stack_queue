"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Queue_1 = require("./src/queue/Queue");
var Person_1 = require("./src/queue/Person");
var myQueue = new Queue_1.default(5);
var nam = new Person_1.default("Nam", 20);
var hung = new Person_1.default("Hung", 28);
var quan = new Person_1.default("Quan", 30);
myQueue.enqueue(nam);
myQueue.enqueue(quan);
myQueue.enqueue(hung);
console.log("---Person first: ");
console.table(myQueue.dequeue());
console.log("---Person second: ");
console.table(myQueue.dequeue());
console.log("---Person third: ");
console.table(myQueue.dequeue());
