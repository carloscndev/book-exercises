/**
 * Implement an algorithm to determinate if a string has all
 * unique characters. What if you cannot use additional data structures.
 */

// Using a additional data structure

function isUnique(s: string): boolean {
  const store = new Map<string, number>();

  for (let c of s) {
    if (store.has(c)) {
      return false;
    } else {
      store.set(c, 1);
    }
  }

  return true;
}

function isUniqueNoStructures(s: string): boolean {
  const sortedChars = s.split('').sort();

  for (let i = 0; i < sortedChars.length - 1; i++) {
    if (sortedChars[i] === sortedChars[i + 1]) {
      return false;
    }
  }

  return true;
}

// Test 
const s1 = 'acb';
const s2 = 'aab';

console.log(`Should return true: string ${s1} -> result ${isUnique(s1)}`)
console.log(`Should return false: string ${s2} -> result ${isUnique(s2)}`)


console.log(`Should return true: string ${s1} -> result ${isUniqueNoStructures(s1)}`)
console.log(`Should return false: string ${s2} -> result ${isUniqueNoStructures(s2)}`)
