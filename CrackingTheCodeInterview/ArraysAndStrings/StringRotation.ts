/**
 * Assume you have a method isSubstring which checks if one word is a substring
 * of another. Given two strings, s1 and s2, write code to check if s2 is a rotation of s1
 * using only one call isSubstring (e.g. 'waterbottle' is a rotation of 'erbottlewat').
 */

function isSubstring(s1: string, s2: string): boolean {
  return s1.includes(s2);
}

function stringRotation(s1: string, s2: string): boolean {
  if (s1.length !== s2.length || s1.length === 0) {
    return false;
  }

  const s1s1 = s1 + s1;

  return isSubstring(s1s1, s2);
}

// Test
const s1 = 'waterbottle';
const s2 = 'erbottlewat';
console.log(stringRotation(s1, s2));
