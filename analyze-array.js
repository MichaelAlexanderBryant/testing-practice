function analyzeArray(inputArray) {
    let arrayMin = Math.min(...inputArray);
    let arrayMax = Math.max(...inputArray);
    let arrayLength = inputArray.length;
    let arrayAverage = inputArray.reduce((a,b) => a + b, 0) / arrayLength;
    let outputObject = {"average": arrayAverage, "min": arrayMin, "max": arrayMax, "length": arrayLength};
    return outputObject;
}

module.exports = analyzeArray;