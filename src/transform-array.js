const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
const transform = (arr) => {
  const disNext = arr.indexOf('--discard-next'),
        disPrev = arr.indexOf('--discard-prev'),  
        doubleNext = arr.indexOf('--double-next'),
        doublePrev = arr.indexOf('--double-prev');

  let result;

  if((disNext === arr.length - 1) || (disPrev === 0) || (doubleNext === arr.length - 1) || (doublePrev === 0)){
      throw new Error("'arr' parameter must be an instance of the Array!")
  } else if(disNext != -1) {
      result = arr;
      arr.splice(disNext, 2)
  } else if(disPrev != -1) {
      result = arr;
      arr.splice((disPrev -1), 2)
  } else if(doubleNext != -1) {
      result = arr;
      result[doubleNext] = result[doubleNext + 1]
  } else if(doublePrev != -1) {
      result = arr;
      result[doublePrev] = result[doublePrev - 1]
  }

  return result
}

module.exports = {
  transform
};
