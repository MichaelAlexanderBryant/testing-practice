const analyzeArray = require('./analyze-array');

it('Return correct object for all positive numbers', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toStrictEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
      });
});

it('Return correct object for all negative numbers', () => {
    expect(analyzeArray([-1,-8,-3,-4,-2,-6])).toStrictEqual({
        average: -4,
        min: -8,
        max: -1,
        length: 6
      });
});

it('Return correct object for combination of negative and positive numbers', () => {
    expect(analyzeArray([-1,8,-3,4,-2,6])).toStrictEqual({
        average: 2,
        min: -3,
        max: 8,
        length: 6
      });
});

it('Return correct object for all zeros', () => {
    expect(analyzeArray([0,0,0])).toStrictEqual({
        average: 0,
        min: 0,
        max: 0,
        length: 3
      });
});
