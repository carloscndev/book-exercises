import Deque from "./Deque.ts";

/**
 * Modify the Queue class to create a Deque class. A deque is a queue-like structure that allows elements to be added and removed from both the front
 * ant the back of the list. Test your class in a program.
 */


// Testing the program
let myQueue = new Deque<string>();
myQueue.pushBack('Carlos');
myQueue.pushBack('Fatima');
myQueue.pushBack('Roberto');
myQueue.pushBack('Monica');
myQueue.pushBack('Luis');

console.log(myQueue);
myQueue.popBack();
console.log(myQueue);
myQueue.popFront();
console.log(myQueue);