class Graph {
  private vertices: number;
  private adj: number[][];
  private edges: number;
  private marked: boolean[];
  private edgeTo: number[];
  public vertexList: string[];

  constructor(v: number) {
    this.vertices = v;
    this.adj = [];
    this.edges = 0;
    this.marked = [];
    this.edgeTo = [];
    this.vertexList = [];
    
    for (let i=0; i < this.vertices; i++) {
      this.adj[i] = [];
    }

    for (let i=0; i < this.vertices; i++) {
      this.marked[i] = false;
    }
  }

  addEdge(v: number, w: number): void {
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges++;
  }

  showGraph(): void {
    for (let i=0; i < this.vertices; i++) {
      let str  = this.vertexList[i] + ' -> ';
      for (let j=0; j < this.vertices; j++) {
        if (this.adj[i][j] !== undefined) {
          let w = this.adj[i][j];
          str += this.vertexList[w] + ' ';
        }
      }
      
      console.log(str);
    }
  }

  dfs(v: number): void {
    this.marked[v] = true;

    for (let i=0; i < this.adj[v].length; i++) {
      let w = this.adj[v][i];
      if(!this.marked[w]) {
        this.dfs(w);
      }
    }
  }

  bfs(s: number): void {
    this.resetMarked();
    let queue = [];
    this.marked[s] = true;
    queue.push(s);

    while (queue.length > 0) {
      const v: number = queue.shift()!;

      for (let i = 0; i < this.adj[v].length; i++) {
        const w: number = this.adj[v][i];

        if (!this.marked[w]) {
          this.marked[w] = true;
          this.edgeTo[w] = v;
          queue.push(w);
        } 
      }
    }
  }

  pathTo(source: number, v: number): number[] | undefined {
    console.log(this.edgeTo, 'this.edgeTo')
    if (!this.hasPathTo(v)) {
      return undefined;
    }

    var path = [];
    for (let i=v; i != source; i = this.edgeTo[i]) {
      path.push(i);
    }
    path.push(source);

    return path;
  }

  hasPathTo(v: number): boolean {
    return this.marked[v];
  }

  showPath(paths: number[]): void {
    let str = '';
    while (paths.length > 0) {
      if (paths.length > 1) {
        str += `${paths.pop()}->`;
      } else {
        str += `${paths.pop()!}`;
      }
    }

    console.log(str);
  }

  topSort() {
    let stack: number[] = [];
    let visited = [];

    for (let i =0; i < this.vertices; i++) {
      visited[i] = false;
    }

    for (let i=0; i < this.vertices; i++) {
      if (!visited[i]) {
        this.topSortHelper(i, visited, stack);
      }
    }

    for (let i=0; i < stack.length; i++) {
      if (stack[i] !== undefined) {
        console.log(this.vertexList[i]);
      }
    }
  }

  topSortHelper(v: number, visited: boolean[], stack: number[]) {
    visited[v] = true;

    for (let i=0; i < this.adj[v].length; i++) {
      let w = this.adj[v][i];
      if (!visited[w]) {
        this.topSortHelper(w, visited, stack);
      }
    }

    stack.push(v);
  }

  resetMarked(): void {
    for (let i = 0; i < this.vertices; i++) {
      this.marked[i] = false;
    }
  }
}

export default Graph;