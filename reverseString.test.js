const reverseString = require('./reverseString.js');

describe('Test reverse function', () => {
  test('"123456" should return "654321"', () => {
    expect(reverseString('123456')).toBe('654321');
  });
});