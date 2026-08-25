/**
 * Build a graph that models the map of the area where you live. Determine
 * the shortest path from a starting vertex to the last vertex.
 */

import Graph from './Graph.ts';

// 1. Create a graph for 5 locations
const myNeighborhood = new Graph(5);

// Assign names to vertices (Indices 0 to 4)
myNeighborhood.vertexList = [
  "Home (0)",       // 0
  "Park (1)",       // 1
  "Grocery (2)",    // 2
  "Gym (3)",        // 3
  "Office (4)"      // 4
];

// 2. Define connections (edges/streets)
//
//  Home (0) ----- Park (1) ----- Gym (3)
//    |                            |
//    +---------- Grocery (2) -----+ ----- Office (4)

myNeighborhood.addEdge(0, 1); // Home <-> Park
myNeighborhood.addEdge(0, 2); // Home <-> Grocery
myNeighborhood.addEdge(1, 3); // Park <-> Gym
myNeighborhood.addEdge(2, 3); // Grocery <-> Gym
myNeighborhood.addEdge(3, 4); // Gym <-> Office

console.log("--- Neighborhood Map ---");
myNeighborhood.showGraph();

// 3. Find shortest path from Home (0) to Office (4)
const source = 0;
const destination = 4;

// BFS explores level by level, guaranteeing the path with fewer edges
myNeighborhood.bfs(source);

// Get the path
const path = myNeighborhood.pathTo(source, destination);

console.log(`\n--- Shortest path from ${myNeighborhood.vertexList[source]} to ${myNeighborhood.vertexList[destination]} ---`);

if (path) {
  // Display raw indices using your showPath method
  myNeighborhood.showPath([...path]);

  // Display human-readable path using location names
  const namedPath = path.map(v => myNeighborhood.vertexList[v]).reverse().join(" -> ");
  console.log("Detailed route:", namedPath);
} else {
  console.log("No path exists between these locations.");
}