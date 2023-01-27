const reverseString = require('./reverse-string');

it('Return reversed word', () => {
    expect(reverseString("Hello")).toBe("olleH");
});

it('Return reversed two words', () => {
    expect(reverseString("Hello world")).toBe("dlrow olleH");
});

it('Return nothing when nothing is recevied', () => {
    expect(reverseString("")).toBe("");
});