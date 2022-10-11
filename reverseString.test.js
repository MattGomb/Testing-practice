const reverseString = require('./reverseString.js');

describe('Test reverse function', () => {
  test('"should return the opposite order"', () => {
    expect(reverseString('1234')).toBe('4321');
  });
});