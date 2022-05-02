const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
const repeater = (str, options) => {
  let result = [];
  let sep = options.separator;
  let adSep = options.additionSeparator;
  for (let i = 0; i < options.repeatTimes; i++){
     let result1 = str;
     let arr = [];
     for(let k = 0; k < options.additionRepeatTimes; k++){
         arr.push(String(options.addition));
     }
     result1 = result1 + arr.join(adSep);
     result.push(result1);
  }

  return result.join(sep);
}

module.exports = {
  repeater
};
