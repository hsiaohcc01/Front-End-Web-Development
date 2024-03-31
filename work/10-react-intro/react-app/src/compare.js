function getLetterCounts(word) {
    const letterCounts = {};
    word.toUpperCase().split('').forEach(letter => {
        letterCounts[letter] = letterCounts[letter] + 1 || 1;
    });
    return letterCounts;
}

function compareWord(word, secretWord) {
    if (word.length !== 5) {
        return `${word} was not a valid word.`;
    } else if (word.toUpperCase() !== secretWord) {
        const wordCounts = getLetterCounts(word);
        const secretWordCounts = getLetterCounts(secretWord);
        let matched = 0;

        for (let letter in secretWordCounts) {
            const wordCount = wordCounts[letter] || 0;
            const secretWordCount = secretWordCounts[letter] || 0;
            matched += Math.min(wordCount, secretWordCount);
        }
        return matched;
    } else {
        return true;
    }
}

export default compareWord;