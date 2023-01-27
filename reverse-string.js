function reverseString(stringInput) {
    let reversedArray = [];
    for (let i = 0; i < stringInput.length; i++) {
        reversedArray.unshift(stringInput[i]);
    };
    reversedOutput = reversedArray.join('')
    
    return reversedOutput;
}

module.exports = reverseString;