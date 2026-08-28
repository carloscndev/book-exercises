class CArray {
  private dataStore: number[];
  private numElements: number;
  private pos: number;

  constructor(numElements: number) {
    this.numElements = numElements;
    this.dataStore = Array(numElements).fill(0);
    this.pos = 0;
  }

  setData(): void {
    for (let i=0; i < this.dataStore.length; i ++) {
      this.dataStore[i] = Math.floor(Math.random() * (this.numElements + 1));
    }
  }

  clear(): void {
    this.dataStore = Array(this.numElements).fill(0);
  }

  insert(element: number): void {
    this.dataStore[this.pos++] = element;
  }

  swap(arr: number[], idx1: number, idx2: number): void {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2]
    arr[idx2] = temp;
  }

  show(): void {
    console.log(this.dataStore);
  }

  bubbleSort() {
    for (let outer = this.numElements; outer >= 2; outer--) {
      for (let inner =0; inner <= outer - 1; ++inner) {
        if (this.dataStore[inner] > this.dataStore[inner+1]) {
          this.swap(this.dataStore, inner, inner+1)
        }
      }
      this.show();
    }
  }

  selectionSort(): void {
    let min, temp;

    for (let outer = 0; outer <= this.dataStore.length - 2; outer++) {
      min = outer;
      for (let inner = outer + 1; inner <= this.dataStore.length - 1; ++inner) {
        if (this.dataStore[inner] < this.dataStore[min]) {
          min = inner;
        }
      }
      this.swap(this.dataStore, outer, min);
      this.show();
    }
  }

  insertionSort(): void {
    let temp, inner;

    for (let outer = 1; outer <= this.dataStore.length - 1; ++outer) {
      temp = this.dataStore[outer];
      inner = outer;
      while (inner > 0 && (this.dataStore[inner - 1] >= temp)) {
        this.dataStore[inner] = this.dataStore[inner - 1];
        --inner;
      }
      this.dataStore[inner] = temp;
      this.show();
    }
  }

  mergeSort(): void {
    this.dataStore = this.mergeSortHelper(this.dataStore);
  }

  private mergeSortHelper(arr: number[]): number[] {
    if (arr.length <= 1) return arr;

    const middle = Math.floor(arr.length / 2);
    const left = this.mergeSortHelper(arr.slice(0, middle));
    const right = this.mergeSortHelper(arr.slice(middle));

    return this.merge(left, right);
  }

  private merge(left: number[], right: number[]): number[] {
    const result: number[] = [];
    let i = 0;
    let j = 0;


    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        result.push(left[i++]);
      } else {
        result.push(right[j++]);
      }
    }

    return result.concat(left.slice(i)).concat(right.slice(j));
  }

  quickSort(): void {
    this.dataStore = this.quickSortHelper(this.dataStore);
  }

  quickSortHelper(arr: number[]): number[] {
    if (arr.length === 0) return [];

    let lesser = [];
    let greater = [];
    const pivot = arr[0];

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
        lesser.push(arr[i]);
      } else {
        greater.push(arr[i]);
      }
    }

    return this.quickSortHelper(lesser).concat(pivot, this.quickSortHelper(greater));
  }
}

export default CArray;