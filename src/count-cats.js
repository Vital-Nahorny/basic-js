const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  let a = 0;
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr[i].length; j++) { 
      if (arr[i][j] === "^^") {
        a += 1;
      }
    }
  } return a;
};
