import Dictionary from "./Dictionary.ts";

/**
 * Rewrite exercise 2 so that it display the words in sorted order.
 */

const TEXT = `This is example text just to test, just test`

const storage = new Dictionary<number>();
const cleanStr = TEXT.toLowerCase().replace(/[^\w\s]/gi, ''); 
const words = cleanStr.split(' ');

for (const word of words) {
  if (!word) continue;

  const currentCount = storage.find(word) ?? 0;
  storage.add(word, currentCount + 1);
}

const keys = storage.getKeys().sort();
console.log(keys)

for (let key of keys) {
  console.log(`${key}: ${storage.find(key)}`)
}
