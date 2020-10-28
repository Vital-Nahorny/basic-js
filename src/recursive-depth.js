const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let res = 1;
    if (arr.some(item => Array.isArray(item))) {
      let newArray = arr.flat();
      return res + this.calculateDepth(newArray);
    }
    return res;
  }
};