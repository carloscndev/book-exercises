class TreeNode<T> {
  public data: T;
  public count: number;
  public left: TreeNode<T> | null;
  public right: TreeNode<T> | null;

  constructor(data: T) {
    this.data = data;
    this.count = 1;
    this.left = null;
    this.right = null;
  }

  show(): T {
    return this.data;
  }

  showWithCount(): string {
    return `${this.data}-${this.count}`
  }
}

class BST<T> {
  public root: TreeNode<T> | null;
  private nodes: number;

  constructor() {
    this.root = null;
    this.nodes = 0;
  }

  insertOrUpdate(data: T) {
    const newNode = new TreeNode<T>(data);
    
    if (this.root === null) {
      this.root = newNode;
      this.nodes++;
      return;
    }

    let current: TreeNode<T> | null = this.root;

    while (true) {
      if (data === current.data) {
        current.count++;
        break;
      }

      if (data < current.data) {
        if (current.left === null) {
          current.left = newNode;
          this.nodes++;
          break
        }
        
        current = current?.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          this.nodes++;
          break;
        }

        current = current?.right;
      }
    }
  }

  inOrder(node: TreeNode<T> | null): void {
    if (node !== null) {
      this.inOrder(node.left);
      console.log(node.showWithCount());
      this.inOrder(node.right);
    }
  }

  preOrder(node: TreeNode<T> | null ): void {
    if(node !== null) {
      console.log(node.showWithCount());
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }

  postOrder(node: TreeNode<T> | null): void {
    if (node !== null) {
      this.postOrder(node.left);
      this.postOrder(node.right);
      console.log(node.showWithCount());
    }
  }

  // E4: Add a min function to the BST class that finds the minimum value in a BST
  getMin(): T {
    let current: TreeNode<T> | undefined | null = this.root;
    while (current?.left !== null) {
      current = current?.left;
    }

    return current.data;
  }

  // E3: Add a max function to the class BTS that finds the maximum value in a BST
  getMax(): T | null {
    let current: TreeNode<T> | undefined | null = this.root;
    while (current?.right !== null) {
      current = current?.right;
    }

    return current.data;
  }

  find(data: T): T | null {
    let current = this.root;
    while(current && current.data !== data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return current?.data || null;
  }

  remove(data: T): void {
    this.root = this.removeNode(this.root, data);
  }

  removeNode(node: TreeNode<T> | null, data: T): TreeNode<T> | null {
    if (node === null) {
      return null;
    }

    if (data === node.data) {
      // node has no children
      if (node.left === null && node.right === null) {
        return null;
      }

      // node has no left children
      if (node.left === null) {
        return node.right;
      }

      // node has no right children
      if (node.right === null) {
        return node.left;
      }

      // node has two children
      let tempNode = this.getSmallest(node.right);
      node.data = tempNode.data;
      node.right = this.removeNode(node.right, tempNode.data);

      return node;
    } else if (data < node.data) {
      node.left = this.removeNode(node.left, data);

      return node;
    } else {
      node.right = this.removeNode(node.right, data);

      return node;
    }
  }

  getSmallest(node: TreeNode<T>): TreeNode<T> {
    if (node.left === null) {
      return node;
    } else {
      return this.getSmallest(node.left);
    }
  }

  // E1: Add a function to the BST class that counts the number of nodes in a BST
  getNodes(): number {
    return this.nodes;
  }

  // E2: Add a function to the BST class that counts the number of edges in a BST
  getEdges(): number {
    return this.nodes - 1;
  }

  printMax(node: TreeNode<T> | null): void {
    let current = node;
    while (current !== null) {
      console.log(current.show());
      current = current.right;
    } 
  }
}

export default BST;