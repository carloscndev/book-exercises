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
  private currentNode: LinkedListNode<T> | null;
  private size: number = 0;

  constructor() {
    this.head = new LinkedListNode<T>(null);
    this.currentNode = this.head;
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

  /**
  * Implement the advance(n) function so that when executed, the current node is moved n nodes forward in the list.
  */
  advance(n: number): LinkedListNode<T> | null {
    let steps = 0;

    while (steps < n && this.currentNode !== null && this.currentNode.next !== null) {
      this.currentNode = this.currentNode.next;
      steps++;
    }

    return this.currentNode;
  }

  getCurrentElement(): T | null {
    if (this.currentNode === null || this.currentNode === this.head) {
      return null;
    }

    return this.currentNode.element;
  }


  /**
  * Implement the back(n) function so that when executed, the current node is moved
  * n spaces backward in the list.
  */
  back(n: number): LinkedListNode<T> | null {
    if (this.head.next === null || this.currentNode === null) {
      return null;
    }

    let currentIndex = 0;
    let tracker: LinkedListNode<T> | null = this.head.next;

    while (tracker !== null && tracker !== this.currentNode) {
      tracker = tracker.next;
      currentIndex++;
    }

    const targetIndex = Math.max(0, currentIndex - n);

    let newCurrent: LinkedListNode<T> | null = this.head.next;
    for (let i = 0; i < targetIndex; i++) {
      if (newCurrent !== null) {
        newCurrent = newCurrent.next;
      }
    }

    this.currentNode = newCurrent;

    return this.currentNode;
  }

  /**
  * Implement the show function, which displays the data associated with the current node.
  */
  show(): void {
    console.log(this.currentNode?.element);
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