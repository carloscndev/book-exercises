import List from './List.ts'

/**
 * 1. Write a function that inserts an element into a list only if the element to 
 * be inserted is larger than any of the elements currently in the list.
 * Larger can be mean either grater than when working with numeric values, or
 * further down in the alphabet, when working with textual values.
 */

/** 
 * 2. Write a function that inserts an element into a list only if the
 * element to be inserted is smaller than any of the elements currently
 * in the list. 
*/

class AdvancedList<T> extends List<T> {
  insertIfLargest(element: T): boolean {
    if (this.length() === 0) {
      this.append(element);
      
      return true;
    }
    
    for (this.front(); this.hasNext();) {
      const current = this.next();
      if (element <= current) {
        return false;
      }
    }
    
    this.append(element);
    
    return true;
  }

  insertIfSmallest(element: T): boolean {
    if (this.length() === 0) {
      this.append(element);

      return true;
    }

    for (this.front(); this.hasNext();) {
      const current = this.next();

      if (element > current) {
        return false;
      }
    }

    this.append(element);
    return true;
  }
}

let list = new AdvancedList<number>();
list.append(0);
list.append(1);
list.insertIfLargest(-2); // not inserted 
list.insertIfLargest(5);
list.insertIfSmallest(4); // not inserted
list.insertIfSmallest(-1);
console.log(list.toString()); // list elements: 0 1 5 -1