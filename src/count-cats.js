const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  let arr2 = [];
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr[i].length; j++) {
      arr2.push(arr[i][j]);
    }
  }
  let a = 0;
  for (i = 0; i < arr2.length; i++) {
    if (arr2[i] === "^^") {
      a += 1;
    }
  } return a;
  };
