const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
let chainMaker = {
  'result': [],
  'addLink': function(num){
      chainMaker.result.push(`( ${num} )`);
      return chainMaker;
  },
  'removeLink': function(num){
      if ((typeof num != 'number') || ((num % 1) != 0) || (num > chainMaker.result.length) || (num < 0)){
          chainMaker.result = [];
          throw new Error("You can't remove incorrect link!.");
      }
      chainMaker.result.splice(num - 1, 1);
      
      return chainMaker;
  },
  'reverseChain': function(){
      chainMaker.result.reverse();
      return chainMaker;
  },
  'getLength': function(){
      return chainMaker.result.length;
  },
  'finishChain': function(){
      let result1 = chainMaker.result.join('~~');
      chainMaker.result = [];
      return result1;
  },
  
}

module.exports = {
  chainMaker
};
