function caesarCipher(stringInput) {
    let cipher = {"a":"b", "b":"c", "c":"d", "d":"e", "e":"f", "f":"g",
    "g":"h", "h":"i", "i":"j", "j":"k", "k":"l", "l":"m", "m":"n", "n":"o",
    "o":"p", "p":"q", "q":"r", "r":"s", "s":"t", "t":"u", "u":"v", "v":"w",
    "w":"x", "x":"y", "y":"z", "z":"a"};
    let inputArray = stringInput.split('');
    let outputArray = [];
    for (let i = 0; i < inputArray.length; i++) {
        if (Object.keys(cipher).includes(inputArray[i])) {
            outputArray.push(cipher[inputArray[i]]);
        } else if (Object.keys(cipher).includes(inputArray[i].toLowerCase())) {
            outputArray.push(cipher[inputArray[i].toLowerCase()].toUpperCase());
        } else {
            outputArray.push(inputArray[i])
        };
    };
    let stringOutput = outputArray.join('');
    return stringOutput;
}

module.exports = caesarCipher;