class List<T> {
  private dataStore: T[];
  private pos: number;


  constructor() {
    this.dataStore = [];
    this.pos = 0;
  }

  append(element: T) {
    this.dataStore.push(element);
  }

  remove(element: T) {
    let foundAt = this.find(element);
    if (foundAt > -1) {
      this.dataStore.splice(foundAt, 1);

      return true;
    }

    return false;
  }

  length() {
    return this.dataStore.length;
  }

  toString() {
    return this.dataStore.join('');
  }

  clear() {
    this.dataStore = [];
    this.pos = 0;
  }

  contains(element: T) {
    for (let i = 0; i<this.dataStore.length; i++) {
      if (this.dataStore[i] === element) return true;
    }

    return false;
  }

  moveTo(position: number) {
    this.pos = position;
  }

  getElement() {
    return this.dataStore[this.pos];
  }

  previous() {
    return this.dataStore[--this.pos];
  }

  next() {
    return this.dataStore[this.pos++];
  }

  hasNext(){
    if (this.pos > this.dataStore.length - 1) {
      return false;
    }
    
    return true;
  }

  hasPrevious() {
    if (this.pos <= 0) {
      return false;
    }

    return true;
  }

  front() {
    this.pos = 0;
  }

  end() {
    this.pos = this.dataStore.length -1; 
  }

  currentPos() {
    return this.pos;
  }

  insert(element: T, after: T) {
    let insertPos = this.find(after);

    if (insertPos > -1) {
      this.dataStore.splice(insertPos+1, 0, element)

      return true;
    }

    return false;
  }

  private find(element: T) {
    for (let i=0; i< this.dataStore.length; i++) {
      if (this.dataStore[i] === element) return i;
    }
    
    return -1;
  }
}

export default List;