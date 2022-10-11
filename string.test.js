const stringLength = require('./string.js');

describe('Test the string length', () => {
  test('"to do li" input should return 6', () => {
    expect(stringLength('This works')).toBe(9);
  })
  test('it should not accept zero characters', () => {
    expect(stringLength('')).toBe('no characters')
  });
  test('it should not accept zero characters', () => {
    expect(stringLength('This sentence is too long')).toBe('too long')
  });
});
