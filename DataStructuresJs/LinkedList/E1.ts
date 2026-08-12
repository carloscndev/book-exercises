import LinkedList from "./LinkedList.ts";

/**
 * Implement the advance(n) function so that when executed, the current node is moved n nodes forward in the list.
 */

// Testing advance method
let myList = new LinkedList<number>();
myList.insert(0);
myList.insert(1);
myList.insert(2);
myList.insert(3);
myList.insert(4);
myList.insert(5);
myList.display();
console.log(myList.getCurrentElement())
myList.advance(2);
console.log(myList.getCurrentElement())
myList.advance(1);
console.log(myList.getCurrentElement())