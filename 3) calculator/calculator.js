const calculator = {
  add(a, b) {
    return a + b;
  },

  subtract(a, b) {
    return a - b;
  },

  divide(a, b) {
    if (b === 0) {
      return 'Error: Cannot divide by zero';
    }
    if (a % b !== 0) {
      return `Rounded to: ${Math.round(a / b)}`;
    }
    return a / b;
  },

  multiply(a, b) {
    return a * b;
  }
}

module.exports = { calculator };