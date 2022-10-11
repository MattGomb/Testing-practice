function reverseString(string) {

  const result = [...string].reverse().join('');

  return result
}

module.exports = reverseString;