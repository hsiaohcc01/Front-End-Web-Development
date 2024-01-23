"use strict";
/* DO NOT MODIFY EXCEPT WHERE ALLOWED */
module.exports = compare; // DO NOT MODIFY - USED FOR TESTING

function compare(word, guess) { // DO NOT MODIFY

    /* YOU MAY MODIFY THE LINES BELOW */

    /* 1. Convert words to lowercase */
    word = word.toLowerCase();
    guess = guess.toLowerCase();
    const uniqueLetters = new Set(word);
    let count = 0;

    /* Compare uniqueLetters(word) and letter(guess) */
    for (let letter of guess) {
        /* If match then count+1 and delete the word in case duplicates */
        if (uniqueLetters.has(letter)) {
            count++;
            uniqueLetters.delete(letter);
        }
    }

    /* Log the total count of matching letters
    console.log("Total match count: " + matchCount);*/
    return count;
  }