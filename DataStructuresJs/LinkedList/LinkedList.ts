class LinkedListNode<T> {
  public element: T | null;
  public next: LinkedListNode<T> | null;

  constructor(element: T | null = null) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList<T> {
  private head: LinkedListNode<T>;
  private size: number = 0;

  constructor() {
    this.head = new LinkedListNode<T>(null);
  }

  public get length(): number {
    return this.size;
  }

  find(item: T): LinkedListNode<T> | null {
    let currentNode = this.head.next;
    while (currentNode !== null && currentNode.element !== item) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  insert(newElement: T, afterItem: T | null = null): void {
    let targetNode: LinkedListNode<T> | null;

    if (afterItem === null) {
      targetNode = this.head;
    } else {
      targetNode = this.find(afterItem);
      if (!targetNode) {
        throw new Error(`The element '${afterItem}' does exist in the list.`);
      }
    }

    const newNode = new LinkedListNode<T>(newElement);
    newNode.next = targetNode.next;
    targetNode.next = newNode;
    this.size++;
  }

  findPrevious(item: T): LinkedListNode<T> | null {
    let currentNode = this.head;
    while (currentNode.next !== null && currentNode.next.element !== item) {
      currentNode = currentNode.next;
    }

    if (currentNode.next === null) {
      return null;
    }

    return currentNode;
  }

  remove(item: T): boolean {
    const prevNode = this.findPrevious(item);
    if (prevNode !== null && prevNode.next !== null) {
      prevNode.next = prevNode.next.next;
      this.size--;
      
      return true;
    }
    
    return false;
  }

  *[Symbol.iterator](): Iterator<T> {
    let current = this.head.next;
    while (current !== null) {
      if (current.element !== null) {
        yield current.element;
      }
      current = current.next;
    }
  }

  display(): void {
    console.log([...this].join(' -> '));
  }
}

export default LinkedList;