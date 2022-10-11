const { calculator } = require('./calculator.js');

describe('addition', () => {
  test('two positives', () => {
    expect(calculator.add(1, 2)).toBe(3);
  })
  test('two negatives', () => {
    expect(calculator.add(-1, -2)).toBe(-3);
  })
  test('negative outcome', () => {
    expect(calculator.add(1, -2)).toBe(-1);
  })
  test('positive outcome', () => {
    expect(calculator.add(-1, 2)).toBe(1);
  })
})

describe('subtraction', () => {
  test('two positives', () => {
    expect(calculator.subtract(6, 5)).toBe(1);
  })
  test('two negatives', () => {
    expect(calculator.subtract(-6, -5)).toBe(-1);
  })
  test('negative outcome', () => {
    expect(calculator.subtract(5, 6)).toBe(-1);
  })
  test('positive outcome', () => {
    expect(calculator.subtract(-5, -6)).toBe(1);
  })
})

describe('division', () => {
  test('throw zero error', () => {
    expect(calculator.divide(8, 0)).toBe('Error: Cannot divide by zero');
  })
  test('two positives', () => {
    expect(calculator.divide(8, 2)).toBe(4);
  })
  test('two negatives', () => {
    expect(calculator.divide(-8, -2)).toBe(4);
  })
  test('negative outcome', () => {
    expect(calculator.divide(8, -2)).toBe(-4);
  })
  test('throw not divisable error', () => {
    expect(calculator.divide(8, 3)).toBe('Rounded to: 3');
  })
})

describe('multiplication', () => {
  test('two positives', () => {
    expect(calculator.multiply(6, 6)).toBe(36);
  })
  test('two negatives', () => {
    expect(calculator.multiply(-5, -5)).toBe(25);
  })
  test('negative outcome', () => {
    expect(calculator.multiply(-6, 6)).toBe(-36);
  })
})