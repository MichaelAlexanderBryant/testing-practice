const capitalizeString = require('./capitalize-string');

it('Return same word when already capitalized', () => {
    expect(capitalizeString("Hello")).toMatch("Hello");
});

it('Return capitalized word when not already capitalized', () => {
    expect(capitalizeString("hello")).toMatch("Hello");
});

it('Return capitalized string of words when already capitalized', () => {
    expect(capitalizeString("Hello World")).toMatch("Hello World");
});

it('Return capitalized string of words when not already capitalized', () => {
    expect(capitalizeString("hello world")).toMatch("Hello world");
});

it('Return same string when first character is not a letter (Number)', () => {
    expect(capitalizeString("820 3948 2aAA b")).toMatch("820 3948 2aAA b");
});

it('Return same string when first character is not a letter (Punctuation)', () => {
    expect(capitalizeString("!!!?- 82039482aAA b")).toMatch("!!!?- 82039482aAA b");
});

it('Return return nothing when nothing is received', () => {
    expect(capitalizeString("")).toMatch("");
});