/**
 * Implement a method to perform basic string compression using the counts
 * of the repeated characters. For example, the string `aabcccccaaa` would become a2b1c5a3.
 * If the 'compressed' string would no become smaller than the original string, your method should return
 * the original string. You can assume the string has only uppercase and lowercase letters (a-z).
 * 
 */

function stringCompressed(s: string): string {
  if (s.length === 0) return s;

  let p = 0;
  let counter = 0;
  const result: string[] = [];
  
  while (p < s.length) {
    counter++;

    if (p + 1 >= s.length || s[p] !== s[p + 1]) {
      result.push(s[p], counter.toString());
      counter = 0;
    }

    p++;
  }
  const compressed = result.join('');
  
  return compressed.length < s.length ? compressed : s;
}

// Test
const s = 'aabcccccaaa';
console.log(`s -> ${s}, result: ${stringCompressed(s)}`);