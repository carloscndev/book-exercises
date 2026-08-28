import Graph from './GraphMap.ts'

const myGraph = new Graph<number>();
myGraph.addEdge(0, 1);
myGraph.addEdge(0, 2);
myGraph.addEdge(1, 3);
myGraph.addEdge(2, 4);

myGraph.showGraph();