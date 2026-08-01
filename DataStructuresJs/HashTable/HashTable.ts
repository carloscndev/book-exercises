class HashTable<T> {
  private table: Array<Array<[string, T]>>;
  private capacity: number;
  private size: number = 0;

  constructor(capacity: number = 137) {
    this.capacity = capacity;
    this.table = new Array(this.capacity);
  }

  public get length(): number {
    return this.size;
  }

  private hash(key: string): number {
    const PRIME = 37;
    let total = 0;

    for (let i = 0; i < key.length; i++) {
      total = (total * PRIME + key.charCodeAt(i)) % this.capacity;
    }

    return total;
  }

  put(key: string, value: T): void {
    const pos = this.hash(key);

    if (!this.table[pos]) {
      this.table[pos] = [];
    }

    const bucket = this.table[pos];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket[i][1] = value;
        return;
      }
    }

    bucket.push([key, value]);
    this.size++;
  }

  get(key: string): T | undefined {
    const pos = this.hash(key);
    const bucket = this.table[pos];

    if (bucket) {
      for (const [storedKey, value] of bucket) {
        if (storedKey === key) {
          return value;
        }
      }
    }

    return undefined;
  }

  remove(key: string): boolean {
    const pos = this.hash(key);
    const bucket = this.table[pos];

    if (bucket) {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          bucket.splice(i, 1);
          this.size--;
          return true;
        }
      }
    }

    return false;
  }

  *[Symbol.iterator](): IterableIterator<[string, T]> {
    for (const bucket of this.table) {
      if (bucket) {
        for (const pair of bucket) {
          yield pair;
        }
      }
    }
  }

  showDistro(): void {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i] !== undefined && this.table[i].length > 0) {
        const bucketStr = this.table[i]
          .map(([k, v]) => `[${k}: ${JSON.stringify(v)}]`)
          .join(', ');
        console.log(`${i}: ${bucketStr}`);
      }
    }
  }
}

export default HashTable;