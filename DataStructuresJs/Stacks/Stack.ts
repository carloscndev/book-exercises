class Stack<T> {
  private dataStore: T[];
  
  constructor() {
    this.dataStore = [];
  }

  push(element: T) {
    this.dataStore.push(element);
  }

  peek(): T {
    return this.dataStore[this.dataStore.length - 1];
  }

  pop() {
    this.dataStore.pop();
  }

  clear() {
    this.dataStore = [];
  }

  size(): number {
    return this.dataStore.length;
  }
}

export default Stack;