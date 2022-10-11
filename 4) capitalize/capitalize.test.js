const capitalize = require('./capitalize.js');

it('should return the first character capitalized', () => {
  expect(capitalize('the first character')).toBe('The first character')
})