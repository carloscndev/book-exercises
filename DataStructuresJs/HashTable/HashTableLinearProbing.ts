const TOMBSTONE = '__DELETED__';

class HashTable<T> {
  private table: Array<string | undefined>;
  private values: Array<T | undefined>;
  private capacity: number;
  private size: number = 0;

  constructor(capacity: number = 137) {
    this.capacity = capacity;
    this.table = new Array(this.capacity);
    this.values = new Array(this.capacity);
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
    if (this.size >= this.capacity) {
      throw new Error("HashTable is full");
    }

    let pos = this.hash(key);
    let firstTombstoneIndex = -1;

    for (let i = 0; i < this.capacity; i++) {
      const currentPos = (pos + i) % this.capacity;
      const currentKey = this.table[currentPos];

      if (currentKey === key) {
        this.values[currentPos] = value;
        return;
      }

      if (currentKey === TOMBSTONE && firstTombstoneIndex === -1) {
        firstTombstoneIndex = currentPos;
      }

      if (currentKey === undefined) {
        const targetPos = firstTombstoneIndex !== -1 ? firstTombstoneIndex : currentPos;
        this.table[targetPos] = key;
        this.values[targetPos] = value;
        this.size++;
        return;
      }
    }
  }

  get(key: string): T | undefined {
    const pos = this.hash(key);

    for (let i = 0; i < this.capacity; i++) {
      const currentPos = (pos + i) % this.capacity;
      const currentKey = this.table[currentPos];

      if (currentKey === undefined) {
        return undefined;
      }

      if (currentKey === key) {
        return this.values[currentPos];
      }
    }

    return undefined;
  }

  remove(key: string): boolean {
    const pos = this.hash(key);

    for (let i = 0; i < this.capacity; i++) {
      const currentPos = (pos + i) % this.capacity;
      const currentKey = this.table[currentPos];

      if (currentKey === undefined) {
        return false;
      }

      if (currentKey === key) {
        this.table[currentPos] = TOMBSTONE;
        this.values[currentPos] = undefined;
        this.size--;
        return true;
      }
    }

    return false;
  }

  *[Symbol.iterator](): IterableIterator<[string, T]> {
    for (let i = 0; i < this.capacity; i++) {
      const key = this.table[i];
      if (key !== undefined && key !== TOMBSTONE) {
        yield [key, this.values[i]!];
      }
    }
  }

  showDistro(): void {
    for (const [key, value] of this) {
      console.log(`${key}: ${JSON.stringify(value)}`);
    }
  }
}

export default HashTable;