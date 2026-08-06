import Stack from './Stack.ts';
/**
 * A stack can be used to ensure that an arithmetic expression has balanced parentheses. Write a
 * function that takes an arithmetic expression as an argument and returns the position in the
 * expression where a parenthesis is missing. An example of an arithmetic expression with
 * unbalanced parentheses is 2.3 + .
 */

function validParentheses(exp: string): number {
  const openParentheses = '(';
  const closeParentheses = ')';
  const stack = new Stack<number>();

  for (let i = 0; i < exp.length; i++) {
    const char = exp[i];

    if (char === openParentheses) {
      stack.push(i); 
    } else if (char === closeParentheses) {
      if (stack.size() === 0) {
        return i;
      }
      
      stack.pop();
    }
  }

  if (stack.size() > 0) {
    return stack.peek(); 
  }

  return -1;
}

// Examples 
// exp: "(2+3"
const r1 = validParentheses("(2+3");
// exp: "(3*8) + (3 + 5)"
const r2 = validParentheses(" (3*8)+(3+5)");
// exp: "(2+3) + 2 + 4)"
const r3 = validParentheses("(2+3)+2+4)");

console.log('r1: ', r1, 'r2: ', r2, 'r3: ', r3);