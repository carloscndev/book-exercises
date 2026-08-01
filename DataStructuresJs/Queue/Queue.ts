class Queue<T> {
  private dataStore: T[];

  constructor() {
    this.dataStore = [];
  }

  enqueue(element: T) {
    this.dataStore.push(element);
  }

  dequeue(): T | undefined {
    return this.dataStore.shift();
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
    return this.dataStore.length === 0 ? true : false;
  }
}