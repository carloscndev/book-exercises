/**
 * Store a set of words in an array and display the content both
 * forward and back-ward.
 */

const words: string[] = ['hello', 'world'];
words.forEach(word => console.log(word));
words.reverse().forEach(word => console.log(word));
