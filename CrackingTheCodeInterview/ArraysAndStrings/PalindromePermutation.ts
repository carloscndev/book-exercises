/** 
 * Given a string, write a function to check if it is a permutation of a palindrome.
 * A palindrome is a word of phrase that is the same forwards and backwards. A permutation
 * is a rearrange of letters. The palindrome does no need to be limited to just dictionary words.
 * 
 * EXAMPLE:
 *  input: Tact Coa
 *  output: True (permutations: "taco cat", "atco cta", etc).
*/

function palindromePermutation(s: string): boolean {
  const freq = new Map<string, number>();
  let oddCount = 0;

  for (let c of s.toLowerCase()) {
    if (c === ' ') continue;

    freq.set(c, (freq.get(c) ?? 0) + 1);
  }

  for (const count of freq.values()) {
    if (count % 2 !== 0) {
      oddCount++;
    }

    if (oddCount > 1) return false;
  }

  
  
  return true;
}

// Test 
let s = 'Tact coa';
console.log(`result: ${palindromePermutation(s)}`);