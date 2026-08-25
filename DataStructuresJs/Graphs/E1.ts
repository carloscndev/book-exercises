/**
 * Write a program that determines which type of graph search is faster,
 * dfs or bfs. Test your program with graphs of many different sizes.
 */


import Graph from './Graph.ts';

// Function to generate a random graph
function generateRandomGraph(vertices: number, density: number = 0.1): Graph {
  const g = new Graph(vertices);

  // Add dummy names to vertices
  for (let i = 0; i < vertices; i++) {
    g.vertexList.push(`V${i}`);
  }

  // Generate random edges
  for (let i = 0; i < vertices; i++) {
    for (let j = i + 1; j < vertices; j++) {
      if (Math.random() < density) {
        g.addEdge(i, j);
      }
    }
  }

  return g;
}

// Function to run the benchmark
function runBenchmark(vertices: number, density: number) {
  console.log(`\n========================================`);
  console.log(`Test with ${vertices} vertices (Density: ${density * 100}%)`);
  console.log(`========================================`);

  const g = generateRandomGraph(vertices, density);

  // Measure DFS
  g.resetMarked();
  const startDFS = performance.now();
  g.dfs(0);
  const endDFS = performance.now();
  const timeDFS = (endDFS - startDFS).toFixed(4);

  // Measure BFS
  g.resetMarked();
  const startBFS = performance.now();
  g.bfs(0);
  const endBFS = performance.now();
  const timeBFS = (endBFS - startBFS).toFixed(4);

  console.log(`DFS Time: ${timeDFS} ms`);
  console.log(`BFS Time: ${timeBFS} ms`);

  if (parseFloat(timeDFS) < parseFloat(timeBFS)) {
    console.log(`🏆 DFS was faster by ${(parseFloat(timeBFS) - parseFloat(timeDFS)).toFixed(4)} ms`);
  } else {
    console.log(`🏆 BFS was faster by ${(parseFloat(timeDFS) - parseFloat(timeBFS)).toFixed(4)} ms`);
  }
}

// Testing with graphs of different sizes
[100, 1000, 5000, 10000].forEach(size => {
  runBenchmark(size, 0.005); // Low density (0.5% connections)
});