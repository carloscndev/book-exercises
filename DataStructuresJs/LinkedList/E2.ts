import LinkedList from "./LinkedList.ts";

/**
 * Implement the back(n) function so that when executed, the current node is moved
 * n spaces backward in the list.
 */

// Testing back method
let myList = new LinkedList<number>();
myList.insert(0);
myList.insert(1);
myList.insert(2);
myList.insert(3);
myList.insert(4);
myList.insert(5);
myList.display();
console.log(myList.getCurrentElement())
myList.advance(4);
console.log(myList.getCurrentElement())
myList.back(2);
console.log(myList.getCurrentElement())