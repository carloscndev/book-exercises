import readline from "node:readline";
import HashTable from "./HashTableLinearProbing.ts";

/**
 * Repeat the exercise 1 using separate chaining.
 */

const FILE = `algorithm: A step-by-step procedure for solving a problem
database: An organized collection of structured data
compiler: A program that translates code from one language to another`;

const dictionary = new HashTable<string>();

const lines = FILE.split("\n");
for (const line of lines) {
  const [word, def] = line.split(":");
  if (word && def) {
    dictionary.put(word.trim(), def.trim());
  }
}


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function searchDefinition(): void {
  rl.question("\nEnter a word to search (or 'exit' to quit): ", (input) => {
    const word = input.trim().toLowerCase();

    if (word === "exit") {
      console.log("Goodbye!");
      rl.close();
      return;
    }

    const definition = dictionary.get(word);

    if (definition) {
      console.log(`\nDefinition of '${word}':\n${definition}`);
    } else {
      console.log(`\nWord '${word}' not found in the dictionary.`);
    }

    searchDefinition();
  });
}

console.log("--- DICTIONARY LOADED ---");
dictionary.showDistro();


searchDefinition();