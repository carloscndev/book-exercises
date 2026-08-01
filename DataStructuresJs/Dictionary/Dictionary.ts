class Dictionary<T> {
  private dataStore: Record<string, T> = Object.create(null);
  private size: number = 0;

  public get length(): number {
    return this.size;
  }

  has(key: string): boolean {
    return key in this.dataStore;
  }

  add(key: string, value: T): void {
    if (!this.has(key)) {
      this.size++;
    }
    this.dataStore[key] = value;
  }

  find(key: string): T | undefined {
    return this.has(key) ? this.dataStore[key] : undefined;
  }

  remove(key: string): boolean {
    if (this.has(key)) {
      delete this.dataStore[key];
      this.size--;
      return true;
    }
    
    return false;
  }

  *[Symbol.iterator](): IterableIterator<[string, T]> {
    for (const key in this.dataStore) {
      yield [key, this.dataStore[key]];
    }
  }

  showAll(): void {
    for (const [key, value] of this) {
      console.log(`${key}: ${value}`);
    }
  }

  clear(): void {
    this.dataStore = Object.create(null);
    this.size = 0;
  }
}

export default Dictionary;
