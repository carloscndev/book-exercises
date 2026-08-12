import LinkedList from '../LinkedList/LinkedList.ts';

/**
 * Modify the Set class so that it uses a linked list store its elements rather than
 * an array. Write a program to test your implementation.
 */

class CustomSet<T> {
  private dataStore: LinkedList<T>;

  constructor() {
    this.dataStore = new LinkedList<T>();
  }

  public get length(): number {
    return this.dataStore.length;
  }

  add(data: T): boolean {
    if (!this.dataStore.find(data)) {
      this.dataStore.insert(data);
      return true;
    }
    return false;
  }

  remove(data: T): boolean {
    const node = this.dataStore.find(data);
    if (node) {
      this.dataStore.remove(data);
      return true;
    }
    return false;
  }

  show(): void {
    this.dataStore.display();
  }

  contains(data: T): boolean {
    return !!this.dataStore.find(data);
  }
}

export default CustomSet;