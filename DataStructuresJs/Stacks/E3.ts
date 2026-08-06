import Stack from "./Stack.ts";

/**
 * An example of a real world stack is a Pez dispenser. Imagine that your virtual Pez
 * dispenser is filled with red, yellow, and white colors and you don't like they yellow
 * ones. Write a program that uses a stack (and maybe more that one) to remove the yellow ones
 * without changing the order of the other candies in the dispenser.
 */


function removeYellowCandies(dispenser: Stack<string>): void {
  const auxStack = new Stack<string>();
  const TARGET_COLOR = "yellow";

  while (dispenser.size() > 0) {
    const currentPez = dispenser.pop();
    if (currentPez !== undefined && currentPez !== TARGET_COLOR) {
      auxStack.push(currentPez);
    }
  }

  while (auxStack.size() > 0) {
    let currentPez = auxStack.pop();
    if (currentPez !== undefined) {
      dispenser.push(currentPez);
    }
  }
}

const dispenser = new Stack<string>();
dispenser.push('red');
dispenser.push('white');
dispenser.push('yellow');
dispenser.push('red');

console.log(dispenser);
removeYellowCandies(dispenser);
console.log(dispenser);