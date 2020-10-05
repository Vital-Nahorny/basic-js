const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
 let { 
  repeatTimes,
  separator,
  addition,
  additionRepeatTimes,
  additionSeparator
} = options;

separator = separator || '+';
additionSeparator = additionSeparator || '|';
if (typeof(addition) !== 'string' && addition !== undefined) {
  addition = String(addition);
}

let arr = new Array(additionRepeatTimes).fill(addition).join(additionSeparator);
return  new Array(repeatTimes).fill(str+arr).join(separator);
};
  