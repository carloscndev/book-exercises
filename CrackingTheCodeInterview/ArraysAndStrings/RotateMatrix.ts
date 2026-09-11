/**
 * Given an image represent by an NxN matrix, where each pixel in the
 * image is 4 bytes, write a method to rotate the image by 90 degrees.
 * Can you do this in place?
 */

function rotateMatrix(m: number[][]): number[][] {
  let newM = [];

  for (let i = 0; i < m.length; i++) {
    let tempArr = [];

    for (let j = m.length - 1; j >= 0; j--) {
      tempArr.push(m[j][i]);
    }

    newM.push(tempArr);
  }

  return newM;
}

// In place
function rotateMatrixTranspose(m: number[][]): void {
  const n = m.length;

  // Transpose the matrix
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      [m[i][j], m[j][i]] = [m[j][i], m[i][j]];
    }
  }

  // Reverse each row
  for (let i = 0; i < n; i++) {
    m[i].reverse();
  }
}

// Test
const m1 = [[1, 2], [3, 4]];
const m2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

console.log(`m: ${m1} -> result: ${rotateMatrix(m1)}`);
console.log(`m: ${m2} -> result: ${rotateMatrix(m2)}`);