const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
const createDreamTeam = (arr) => {
  let result = [];
  arr.forEach((el) => {
      if(typeof el !== 'string'){
          return false
      };
      if(el[0] === el[0].toUpperCase()){
          result.push(el[0])
      };    
  })
  return result.sort().join('');
}

module.exports = {
  createDreamTeam
};
