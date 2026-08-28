class Graph<T> {
  private graph: Map<T,Set<T>>;

  constructor() {
    this.graph = new Map<T,Set<T>>();
  }

  addEdge(v: T, w: T) {
    this.addVertex(v);
    this.addVertex(w);

    this.graph.get(v)!.add(w);
    this.graph.get(w)!.add(v);;
  }

  showGraph(): void {
    for (const [vertex, neighbors] of this.graph.entries()) {
      const neighborsList = Array.from(neighbors).join(', ');
      console.log(`${vertex} -> [${neighborsList}]`)
    }
  }

  addVertex(v: T): void {
     if (!this.graph.has(v)) {
      this.graph.set(v, new Set<T>());
    } 
  }

  bfs(v: T): void {
    
  }
}

export default Graph;
