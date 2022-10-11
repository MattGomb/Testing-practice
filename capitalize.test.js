const capitalize = require('./capitalize.js');

describe('should return the first character capitalized', () => {
  test('one word', () => {
    expect(capitalize('incredible')).toBe('Incredible');
  })

  test('more than one word', () => {
    expect(capitalize('bohemian rhapsody')).toBe('Bohemian rhapsody');
  })

})