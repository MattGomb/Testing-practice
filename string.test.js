const stringLength = require('./string.js');

describe('Test the length', () => {
  test('"return the nr of characters', () => {
    expect(stringLength('This works')).toBe(9);
  })
  
  test('no zero characters', () => {
    expect(stringLength('')).toBe('no characters')
  })

  test('it should not accept zero characters', () => {
    expect(stringLength('This sentence is too long')).toBe('too long')
  })
})
