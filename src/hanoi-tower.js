const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let arr = {
    turns: null,
    seconds: null
  };
  arr.turns = Math.pow(2, disksNumber) - 1;
  arr.seconds = Math.floor((arr.turns / turnsSpeed) * 60 * 60);
  return arr;
};
