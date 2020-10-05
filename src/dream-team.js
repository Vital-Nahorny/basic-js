const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  if (typeof arr !== "object" || arr === null) {
    return false;
  }
   let arr2 = [];
   
 for (i = 0; i < arr.length; i++) {
   if (typeof arr[i] === "string") 
     {arr2.push((arr[i].trim())[0].toUpperCase());}
   } 
   return arr2.sort().join('');
};
