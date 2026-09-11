/**
 * Given two strings, write a method to decide if one is a permutation of the
 * other.
 */

function checkPermutation(s1: string, s2: string): boolean {
  if (s1.length !== s2.length) return false;

  let storedChars = new Map<string, number>();
   
  for (let char of s1) {
    storedChars.set(char, (storedChars.get(char) ?? 0) + 1);
  }

  for (let char of s2) {
   const count = storedChars.get(char);

   if (!count) {
    return false;
   }

   storedChars.set(char, count - 1);
  }



  
  return true;
}

/**
 * Testing
 */

const s1 = 'acd';
const s2 = 'dca';
const s3 = 'zad'

console.log(`s1: ${s1}, s2: ${s2} -> result: ${checkPermutation(s1, s2)}`);
console.log(`s1: ${s1}, s2: ${s3} -> result: ${checkPermutation(s1, s3)}`);
