/**
 * Refactor the following to use ES6 arrow syntax.
 * Make sure your refactored function is still called "add".
 * Extra points if you can fit it on one line.
 * @param {number} a
 * @param {number} b
 * @returns {number} the sum of `a` plus `b`
 */
function add(a, b) {
  return a + b;
}

/**
 * Refactor the following to use ES6 arrow syntax.
 * Make sure your refactored function is still called "tripleAndFilter".
 * @param {array} arr an array of numbers
 * @returns {array} an array of only the numbers that, when multiplied by 3,
 * are divisibile by 5
 */
function tripleAndFilter(arr) {
  return arr
    .map(function(value) {
      return value * 3;
    })
    .filter(function(value) {
      return value % 5 === 0;
    });
}
/**
 * Refactor the following to use ES6 arrow syntax.
 * Make sure your refactored function is still called "doubleOddNumbers".
 * @param {array} arr an array of numbers
 * @returns {array} an array of only the even numbers. Each value in the
 * new array of numbers is doubled
 */
function doubleOddNumbers(arr) {
  return arr
    .filter(function(val) {
      return val % 2 !== 0;
    })
    .map(function(val) {
      return val * 2;
    });
}

module.exports = {
  add,
  tripleAndFilter,
  doubleOddNumbers
};
