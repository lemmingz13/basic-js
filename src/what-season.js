const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
const getSeason = (dat) => {
  let result = '';
  if(dat == '' || dat == null){
      return 'Unable to determine the time of year!'
  }
  if(String(Date.parse(dat)) == 'NaN'){
      throw new Error('Invalid date!')
  }
  if((dat.getMonth() >= 0 && dat.getMonth() <= 1) || dat.getMonth() == 11){
      result = 'winter';
  } else if(dat.getMonth() >= 2 && dat.getMonth() <= 4){
      result = 'spring';
  } else if(dat.getMonth() >= 5 && dat.getMonth() <= 7){
      result = 'summer';
  } else if(dat.getMonth() >= 8 && dat.getMonth() <= 10){
      result = 'autumn';
  }
  return result
}

module.exports = {
  getSeason
};
