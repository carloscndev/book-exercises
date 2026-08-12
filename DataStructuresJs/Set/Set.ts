class CustomSet<T> {
  private dataStore: T[];

  constructor() {
    this.dataStore = [];
  }

  public get length(): number {
    return this.dataStore.length;
  }

  /**
   * Modify the Set class so that the class stores its elements in sorter order. 
   * Write a program to test your implementation
   */
  addSorted(data: T): boolean {
    if (this.contains(data)) {
      return false;
    }

    let inserted = false;
    for (let i = 0; i < this.dataStore.length; i++) {
      if (data < this.dataStore[i]) {
        this.dataStore.splice(i, 0, data);
        inserted = true;
        break;
      }
    }

    if (!inserted) {
      this.dataStore.push(data);
    }

    return true;
  }

  add(data: T): boolean {
    if (this.dataStore.indexOf(data) < 0) {
      this.dataStore.push(data);
      return true;
    }
    return false;
  }

  remove(data: T): boolean {
    const pos = this.dataStore.indexOf(data);
    if (pos >= 0) {
      this.dataStore.splice(pos, 1);
      return true;
    }
    return false;
  }

  show(): T[] {
    return this.dataStore;
  }

  contains(data: T): boolean {
    return this.dataStore.indexOf(data) >= 0;
  }

  union(set: CustomSet<T>): CustomSet<T> {
    const temp = new CustomSet<T>();

    for (let i = 0; i < this.dataStore.length; i++) {
      temp.add(this.dataStore[i]);
    }

    const otherData = set.show();
    for (let i = 0; i < otherData.length; i++) {
      temp.add(otherData[i]);
    }

    return temp;
  }

  intersect(set: CustomSet<T>): CustomSet<T> {
    const temp = new CustomSet<T>();

    for (let i = 0; i < this.dataStore.length; i++) {
      if (set.contains(this.dataStore[i])) {
        temp.add(this.dataStore[i]);
      }
    }

    return temp;
  }

  subset(set: CustomSet<T>): boolean {
    if (this.length > set.length) {
      return false;
    }

    for (let i = 0; i < this.dataStore.length; i++) {
      if (!set.contains(this.dataStore[i])) {
        return false;
      }
    }

    return true;
  }

  /**
   * Add the function higher(element) to the Set class. This function returns the least element
   * in the strictly grater than the given element. Test your function in a program.
   */
  higher(data: T): T | null {
    for (let i = 0; i < this.dataStore.length; i++) {
      if (this.dataStore[i] > data) {
        return this.dataStore[i];
      }
    }
    
    return null;
  }

  /**
   * Add the function lower(element) to the Set class. This function returns the greatest element
   * in the set strictly less than the given element. Test your function in a program.
   */
  lower(data: T): T | null {
    for (let i = this.dataStore.length - 1; i >= 0; i--) {
      if (this.dataStore[i] < data) {
        return this.dataStore[i];
      }
    }

    return null;
  }
}

export default CustomSet;