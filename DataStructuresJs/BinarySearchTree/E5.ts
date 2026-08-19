/**
 * Write a program that storage the words a large text file in a BST and displays
 * the number of times each word occurs in the text.
 */

import BST from './BinarySearchTree.ts'

const text = 'Hello World, Hello again, world';
const words = text.toLowerCase().match(/\w+/g) || [];
const storage = new BST<string>();

for (let word of words) {
  storage.insertOrUpdate(word);
}

storage.inOrder(storage.root);