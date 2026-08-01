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
  let stack = new Stack();
  let arrExp = exp.split('');

  for (let i=0; i<arrExp.length; i++) {
    if (arrExp[i] === openParentheses) stack.push(arrExp[i]);
  }
  
  return 0;
} 