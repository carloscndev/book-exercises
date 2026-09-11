/**
 * Write a method to replace all space in a string with `%20`. You may assume that 
 * the string has sufficient space at the end to hold the additional characters, and that you are given
 * the "true" lengths of the string. (Note: if the implementation in java, please use a character array so that you can
 * perform this operation in place).
 */

function URLify(s: string, trueLength: number): string {
  const chars = s.split('');
  
  let spaceCount = 0;
  for (let i = 0; i < trueLength; i++) {
    if (chars[i] === ' ') spaceCount++;
  }

  let index = trueLength + spaceCount * 2;

  for (let i = trueLength - 1; i >= 0; i--) {
    if (chars[i] === ' ') {
      chars[index - 1] = '0';
      chars[index - 2] = '2';
      chars[index - 3] = '%';
      index -= 3;
    } else {
      chars[index - 1] = chars[i];
      index--;
    }
  }

  return chars.join('');
}

// Test
console.log(URLify("Mr John Smith    ", 13));