const reverseString = require('./reverseString.js');

describe('Test reverse function', () => {
  test('"should return the opposite order"', () => {
    expect(reverseString('kayak')).toBe('kayak');
  })

  test('"should return the opposite order"', () => {
    expect(reverseString('123')).toBe('321');
  })
  
})