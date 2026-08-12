class LinkedListNode<T> {
  public element: T | null;
  public next: LinkedListNode<T>;

  constructor(element: T | null = null) {
    this.element = element;
    this.next = this;
  }
}

class CircularlyLinkedList<T> {
  private head: LinkedListNode<T>;
  private size: number = 0;

  constructor() {
    this.head = new LinkedListNode<T>(null);
    this.head.next = this.head;
  }

  public get length(): number {
    return this.size;
  }

  find(item: T): LinkedListNode<T> | null {
    let currentNode = this.head.next;

    while (currentNode !== this.head) {
      if (currentNode.element === item) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }

    return null;
  }

  insert(newElement: T, afterItem: T | null = null): void {
    let targetNode: LinkedListNode<T> | null;

    if (afterItem === null) {
      targetNode = this.head;
    } else {
      targetNode = this.find(afterItem);
      if (!targetNode) {
        throw new Error(`The element '${afterItem}' does not exist in the list.`);
      }
    }

    const newNode = new LinkedListNode<T>(newElement);
    newNode.next = targetNode.next;
    targetNode.next = newNode;
    this.size++;
  }

  findPrevious(item: T): LinkedListNode<T> | null {
    let currentNode = this.head;

    while (currentNode.next !== this.head) {
      if (currentNode.next.element === item) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }

    return null;
  }

  remove(item: T): boolean {
    const prevNode = this.findPrevious(item);

    if (prevNode !== null) {
      const nodeToRemove = prevNode.next;
      prevNode.next = nodeToRemove.next;
      
      nodeToRemove.next = nodeToRemove; 
      
      this.size--;
      return true;
    }

    return false;
  }

  *[Symbol.iterator](): IterableIterator<T> {
    let current = this.head.next;

    while (current !== this.head) {
      if (current.element !== null) {
        yield current.element;
      }
      current = current.next;
    }
  }

  display(): void {
    if (this.size === 0) {
      console.log('(empty circular list)');
      return;
    }
    console.log([...this].join(' -> ') + ' -> (head)');
  }

  getHeadNode(): LinkedListNode<T> {
    return this.head;
  }

  getFirstNode(): LinkedListNode<T> {
    return this.head.next;
  }
}

export default CircularlyLinkedList;