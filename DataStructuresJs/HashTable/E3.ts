import HashTable from "./HashTable.ts";
/**
 * Write a program using hashing that reads text file and completes a list of
 * the words in the file with the number of times each word appears in the file.
 */

const TEXT = `This is example text just to test, just test`

const storage = new HashTable<number>();
const cleanStr = TEXT.toLowerCase().replace(/[^\w\s]/gi, ''); 
const words = cleanStr.split(' ');

for (const word of words) {
  if (!word) continue;

  const currentCount = storage.get(word) ?? 0;
  storage.put(word, currentCount + 1);
}

storage.showDistro();