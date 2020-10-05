const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
    if (typeof(sampleActivity) === 'string' && parseFloat(sampleActivity) > 0 && parseFloat(sampleActivity) <= 15) {
      let a = Math.log(2) / HALF_LIFE_PERIOD;
      return t = Math.ceil(Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / a);
    } else {
      return false;
    }
}
