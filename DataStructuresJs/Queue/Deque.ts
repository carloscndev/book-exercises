class Deque<T> {
  private dataStore: T[];

  constructor() {
    this.dataStore = [];
  }

  pushBack(element: T): void {
    this.dataStore.push(element);
  }

  popFront(): T | undefined {
    return this.dataStore.shift();
  }

  pushFront(element: T): void {
    this.dataStore.unshift(element);
  }

  popBack(): T | undefined {
    return this.dataStore.pop();
  }

  front(): T {
    return this.dataStore[0];
  }

  back(): T {
    return this.dataStore[this.dataStore.length - 1];
  }

  clear(): void {
    this.dataStore = [];
  }

  size(): number {
    return this.dataStore.length;
  }

  empty(): boolean {
    return this.dataStore.length === 0;
  }
}

export default Deque;