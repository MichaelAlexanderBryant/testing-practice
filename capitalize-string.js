function capitalizeString(stringInput) {
    let wordArray = stringInput.split(' ');
    let firstWord = wordArray.shift();
    firstWord = firstWord.split('');
    let firstCharacter = firstWord.shift();
    firstWord.unshift(firstCharacter.toUpperCase());
    firstWord = firstWord.join('');
    wordArray.unshift(firstWord);
    wordArray = wordArray.join(' ');
    stringOutput = wordArray;
    return stringOutput;
};

module.exports = capitalizeString;