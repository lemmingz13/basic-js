const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
const deleteDigit = function(n){
  let number = String(n);
  let arr = number.split('');
  let z = Math.min(...arr);
  arr.splice(arr.indexOf(String(z)), 1);
  return arr.join('')
}

module.exports = {
  deleteDigit
};
