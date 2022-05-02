const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
 class DepthCalculator {
  constructor(array) {
      this.array = array;
      this.deep = 1;
  }
  calculateDepth(array = this.array, deep = 1) {
      if (deep > this.deep) this.deep = deep;
      for (let i of array) {
          if (Array.isArray(i)) {
              this.calculateDepth(i, deep + 1);
          }
      }
      return this.deep;
  }
}


module.exports = {
  DepthCalculator
};
