import Deque from './Deque.ts';

/**
 * Use the Deque class you create in Example 5-1 to determine if a given word is a
 * palindrome.
 */

function checkIfPalindrome(s: string): boolean {
  const deque = new Deque<string>();
  const cleanStr = s.toLowerCase().replace(/[^a-z0-0]/g, '');

  for (let i = 0; i < cleanStr.length; i++) {
    deque.pushBack(cleanStr[i]);
  }

  while (deque.size() > 1) {
    const frontChar = deque.popFront();
    const backChar = deque.popBack();

    if (frontChar !== backChar) {
      return false;
    }
  }

  return true;
}

// Testing the program
const s1 = 'ata';
const s2 = 'string';
const result1 = checkIfPalindrome(s1);
const result2 = checkIfPalindrome(s2);

console.log(result1);
console.log(result2);