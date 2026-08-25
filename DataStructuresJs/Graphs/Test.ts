import Graph from './Graph.ts';

const g = new Graph(5);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);
console.log('Show');
g.showGraph();
console.log('DFS');
g.dfs(0);
console.log('BFS');
g.bfs(0);
const vertex = 4;
const source = 0;
let paths = g.pathTo(source, vertex);
console.log(paths);
console.log('showing paths');
g.showPath(paths!);