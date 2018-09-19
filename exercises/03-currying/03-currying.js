/**
 * Write a function called specialMultiply which accepts two parameters.
 * If the function is passed both parameters, it should return the product of the two.
 * If the function is only passed one parameter, it should return a function which can later be passed another
 * parameter to return the product.
 * You will have to use closure and arguments to solve this.
 *
 * @example
 *    specialMultiply(3,4); // 12
 *    specialMultiply(3)(4); // 12
 *    specialMultiply(3); // function(){}....
 *
 * @param {number} a
 * @param {number} b
 */
function specialMultiply(a, b) {

  if (b)
  return  a *b;
  
  return function(b){
    return  a * b;
  }
}

var a = 3;
var b = 4;
console.log(specialMultiply(a)(b));


module.exports = {
  specialMultiply
};
