import LinkedList from "./LinkedList.ts";

/**
 * Implement the show function, which displays the data associated with the current node.
 */

// Testing show method
let myList = new LinkedList<number>();
myList.insert(0);
myList.insert(1);
myList.insert(2);
myList.insert(3);
myList.insert(4);
myList.insert(5);
myList.display();
myList.show();
myList.advance(4);
myList.show();
myList.back(2);
myList.show();