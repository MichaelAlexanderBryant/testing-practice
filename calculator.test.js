const Calculator = require('./calculator');

// Add
it('Add two positive numbers', () => {
    let calc = new Calculator();
    expect(calc.add(1,2)).toBe(3);
});

it('Add two negative numbers', () => {
    let calc = new Calculator();
    expect(calc.add(-1,-2)).toBe(-3);
});

it('Add mix of positive and negative numbers', () => {
    let calc = new Calculator();
    expect(calc.add(1,-2)).toBe(-1);
});

// Subtract
it('Subtract two positive numbers', () => {
    let calc = new Calculator();
    expect(calc.subtract(1,2)).toBe(-1);
});

it('Subtract two negative numbers', () => {
    let calc = new Calculator();
    expect(calc.subtract(-1,-2)).toBe(1);
});

it('Subtract mix of positive and negative numbers', () => {
    let calc = new Calculator();
    expect(calc.subtract(1,-2)).toBe(3);
});

// Divide
it('Divide two positive numbers', () => {
    let calc = new Calculator();
    expect(calc.divide(1,2)).toBe(0.5);
});

it('Divide two negative numbers', () => {
    let calc = new Calculator();
    expect(calc.divide(-1,-2)).toBe(0.5);
});

it('Divide mix of positive and negative numbers', () => {
    let calc = new Calculator();
    expect(calc.divide(1,-2)).toBe(-0.5);
});

// Multiply
it('Multiply two positive numbers', () => {
    let calc = new Calculator();
    expect(calc.multiply(1,2)).toBe(2);
});

it('Multiply two negative numbers', () => {
    let calc = new Calculator();
    expect(calc.multiply(-1,-2)).toBe(2);
});

it('Multiply mix of positive and negative numbers', () => {
    let calc = new Calculator();
    expect(calc.multiply(1,-2)).toBe(-2);
});