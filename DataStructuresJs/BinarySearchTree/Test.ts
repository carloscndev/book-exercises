import BST from './BinarySearchTree.ts'

let numbers = new BST<number>();

numbers.insertOrUpdate(23);
numbers.insertOrUpdate(45);
numbers.insertOrUpdate(16);
numbers.insertOrUpdate(37);
numbers.insertOrUpdate(3);
numbers.insertOrUpdate(99);
numbers.insertOrUpdate(22);
console.log('nodes: ', numbers.getNodes());
console.log('edges: ', numbers.getEdges());
console.log('IN-ORDER');
numbers.inOrder(numbers.root);
console.log('PRE-ORDER')
numbers.preOrder(numbers.root);
console.log('POST-ORDER');
numbers.postOrder(numbers.root);
console.log('print max');
numbers.printMax(numbers.root);
console.log('Removing a node....')
numbers.remove(37);
numbers.inOrder(numbers.root);
console.log('root', numbers.root?.data);