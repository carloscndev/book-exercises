/**
 * Modify the priority queue example from Example 5-5 so that higher-priority elements have higher numbers rather
 * than lower numbers. Test your implementation with the example chapter.
 */

interface Patient {
  name: string;
  code: number;
}

class PriorityQueue<T extends { code: number }> {
  private dataStore: T[];

  constructor() {
    this.dataStore = [];
  }

  enqueue(element: T): void {
    this.dataStore.push(element);
  }

  dequeue(): T | undefined {
    if (this.empty()) return undefined;

    let entry = 0;
    for (let i = 1; i < this.dataStore.length; i++) {
      if (this.dataStore[i].code > this.dataStore[entry].code) {
        entry = i;
      }
    }

    const [removed] = this.dataStore.splice(entry, 1);
    return removed;
  }

  front(): T | undefined {
    return this.dataStore[0];
  }

  back(): T | undefined {
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

export default PriorityQueue;

// Test
const p1 = { name: "Smith", code: 5 };
const p2 = { name: "Jones", code: 1 };
const p3 = { name: "Ingram", code: 6 };
const p4 = { name: "Brown", code: 1 };
const ed = new PriorityQueue<Patient>();

ed.enqueue(p1);
ed.enqueue(p2);
ed.enqueue(p3);
ed.enqueue(p4);

console.log("Attending to:", ed.dequeue()?.name);
console.log("Attending to:", ed.dequeue()?.name);
console.log("Attending to:", ed.dequeue()?.name);