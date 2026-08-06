import Stack from "./Stack.ts";
/**
 * A postfix expression evaluator works on arithmetic expression taking the following form:
 * op1 op2  operator
 * Using two stacks, one for the operands and one for the operators design and implement
 * a javascript function that converts infix expression to a postfix expressions, and then
 * use the stack to evaluate the expression
 */

function precedence(op: string): number {
  if (op === '+' || op === '-') return 1;
  if (op === '*' || op === '/') return 2;
  return 0;
}

function isNumber(char: string): boolean {
  return char >= '0' && char <= '9';
}

function isOperator(char: string): boolean {
  return char === '+' || char === '-' || char === '*' || char === '/';
}

function convertToPostfix(exp: string): string[] {
  const operators = new Stack<string>();
  const postfix: string[] = [];
  
  const cleanExp = exp.replace(/\s+/g, '');

  for (let i = 0; i < cleanExp.length; i++) {
    const char = cleanExp[i];

    if (isNumber(char)) {
      let numStr = char;
      while (i + 1 < cleanExp.length && isNumber(cleanExp[i + 1])) {
        numStr += cleanExp[++i];
      }
      postfix.push(numStr);
    } else if (char === '(') {
      operators.push(char);
    } else if (char === ')') {
      while (operators.size() !== 0 && operators.peek() !== '(') {
        postfix.push(operators.pop()!);
      }
      if (operators.size() !== 0 && operators.peek() === '(') {
        operators.pop();
      }
    } else if (isOperator(char)) {
      while (
        operators.size() > 0 &&
        precedence(operators.peek()!) >= precedence(char)
      ) {
        postfix.push(operators.pop()!);
      }
      operators.push(char);
    }
  }

  while (operators.size() > 0) {
    postfix.push(operators.pop()!);
  }

  return postfix;
}

const calc: Record<string, (a: number, b: number) => number> = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b,
};

function evaluatePostfix(postfix: string[]): number {
  const operandStack = new Stack<number>();

  for (let i = 0; i < postfix.length; i++) {
    const token = postfix[i];

    if (!isNaN(Number(token))) {
      operandStack.push(Number(token));
    } else if (isOperator(token)) {
      const right = operandStack.pop() ?? 0;
      const left = operandStack.pop() ?? 0;
      
      const result = calc[token](left, right);
      operandStack.push(result);
    }
  }

  return operandStack.pop() ?? 0;
}

// Examples:
// "3 + 4 * 2"
const postFixExp1 = convertToPostfix('3+4*2');
// "4 + 7 * 1 + 2"
const postFixExp2 = convertToPostfix('4+7*1+2');


console.log(postFixExp1, 'postFixExp1');
console.log(postFixExp2, 'postFixExp2');

const result1 = evaluatePostfix(postFixExp1);
const result2 = evaluatePostfix(postFixExp2);

console.log(result1, 'result1');
console.log(result2, 'result2');
