import Dictionary from "./Dictionary.ts";

/**
 * Using the Dictionary class, write a program that stores the number of occurrences of words in a text. Your program should display each word in a
 * text just once as well as the number of times the word occurs in the text. For example given the text:
 * "the brown fox jumped over the blue fox" the output will be:
 * the: 2
 * brown: 1
 * fox: 2
 * jumped: 1
 * over: 1
 * blue: 1
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

storage.showAll();