"use strict";
/* DO NOT MODIFY EXCEPT WHERE ALLOWED */
module.exports = compare; // DO NOT MODIFY - USED FOR TESTING

function compare(word, guess) { // DO NOT MODIFY

    /* YOU MAY MODIFY THE LINES BELOW */

    /* 1. Convert words to lowercase */
    word = word.toLowerCase();
    guess = guess.toLowerCase();
    let count = 0;

    /* Transform the guess into an array for removing matched characters */
    let guessArray = Array.from(guess);

    /* Compare uniqueLetters(word) and letter(guess) */
    for (let letter of word) {
        let index = guessArray.indexOf(letter);
        if (index !== -1) {
            count++;
            /* Delete matched letters from guessArray to handle duplicates accurately */
            guessArray.splice(index, 1);
        }
    }

    return count;
}
