/**
 * Create an object that stores individual letters in an array and has a function
 * for displaying the letters as a single word.
 */

class DisplayWord {
  private letters: string[];

  constructor() {
    this.letters = [];
  }

  addLetter(letter: string) {
    this.letters.push(letter);
  }

  displayWord() {
    const word = this.letters.join('');
    console.log(word);
  }
}

const displayWord = new DisplayWord();
displayWord.addLetter('a');
displayWord.addLetter('b');
displayWord.addLetter('c');
displayWord.displayWord();