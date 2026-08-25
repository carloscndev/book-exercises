import Graph from './Graph.ts';

const g = new Graph(6);
g.addEdge(1, 2);
g.addEdge(2, 5);
g.addEdge(1, 3);
g.addEdge(1, 4);
g.addEdge(0, 1);
g.vertexList = ['CS1', 'CS2', 'Data Structures', 'Assembly Language', 'Operating System', 'Algorithms'];
g.showGraph();
console.log('Top Sort');
g.topSort();