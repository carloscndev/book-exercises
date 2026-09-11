/**
 * Write a algorithm such that if an element in a MxN matrix is 0, its entire row
 * and column are set to 0.
 */

function zeroMatrix(m: number[][]): number [][] {
  const zeroRows = new Set<number>();
  const zeroCols = new Set<number>(); 

  for (let i = 0; i < m.length; i++) {
    for (let j = 0; j < m[0].length; j++) {
     if (m[i][j] === 0) {
        zeroRows.add(i);
        zeroCols.add(j);
      }
    }
  }

  for (const iVal of zeroRows) {
    for (let j = 0; j < m[0].length; j++) {
      m[iVal][j] = 0;
    }
  }

  for (const jVal of zeroCols) {
    for (let i = 0; i < m.length; i++) {
      m[i][jVal] = 0;
    }
  }

  return m;
}

// Test
const m = [[1, 2, 3, 4], [5, 6, 7, 0], [9, 10, 11, 12], [13, 14, 15, 16]];
console.log(zeroMatrix(m));