/**
 * Rewrite your solution to Example 4-6 using a doubly linked list.
 */
class DoublyLinkedListNode<T> {
  public element: T | null;
  public next: DoublyLinkedListNode<T> | null;
  public previous: DoublyLinkedListNode<T> | null;

  constructor(element: T | null = null) {
    this.element = element;
    this.next = null;
    this.previous = null;
  }
}

class DoublyLinkedList<T> {
  private head: DoublyLinkedListNode<T>;
  private size: number = 0;

  constructor() {
    this.head = new DoublyLinkedListNode<T>(null);
  }

  public get length(): number {
    return this.size;
  }

  find(item: T): DoublyLinkedListNode<T> | null {
    let currentNode = this.head.next;
    while (currentNode !== null && currentNode.element !== item) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  insert(newElement: T, afterItem: T | null = null): void {
    let targetNode: DoublyLinkedListNode<T> | null;

    if (afterItem === null) {
      targetNode = this.head;
    } else {
      targetNode = this.find(afterItem);
      if (!targetNode) {
        throw new Error(`The element '${afterItem}' does not exist in the list.`);
      }
    }

    const newNode = new DoublyLinkedListNode<T>(newElement);

    newNode.next = targetNode.next;
    newNode.previous = targetNode;

    if (targetNode.next !== null) {
      targetNode.next.previous = newNode;
    }
    targetNode.next = newNode;

    this.size++;
  }

  remove(item: T): boolean {
    const currentNode = this.find(item);
    if (currentNode === null) {
      return false;
    }

    if (currentNode.previous) {
      currentNode.previous.next = currentNode.next;
    }

    if (currentNode.next !== null) {
      currentNode.next.previous = currentNode.previous;
    }

    currentNode.next = null;
    currentNode.previous = null;

    this.size--;
    return true;
  }

  findLast(): DoublyLinkedListNode<T> {
    let currentNode = this.head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  *[Symbol.iterator](): IterableIterator<T> {
    let current = this.head.next;
    while (current !== null) {
      if (current.element !== null) {
        yield current.element;
      }
      current = current.next;
    }
  }

  *reverseIterator(): IterableIterator<T> {
    let current: DoublyLinkedListNode<T> | null = this.findLast();
    while (current !== null && current !== this.head) {
      if (current.element !== null) {
        yield current.element;
      }
      current = current.previous;
    }
  }

  display(): void {
    console.log([...this].join(' -> '));
  }

  dispReverse(): void {
    console.log([...this.reverseIterator()].join(' <- '));
  }
}

export default DoublyLinkedList;