const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.reverseFlag = isDirect;
    this.abc = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
  }

  encrypt(str, key) {
    const strArr = [...str.toUpperCase()];
    const keyArr = [...key.toUpperCase()];
    let pos = 0;
    let res = strArr.map( item => {
      if (this.abc.includes(item)) {
        let index = (this.abc.indexOf(keyArr[pos]) + this.abc.indexOf(item)) % this.abc.length;
        pos = ++pos % keyArr.length;
        return this.abc[index];
      }
      return item;
    } );
    if (this.reverseFlag === true) {
      return res.join('');
    }
    return res.reverse().join('');
  }

  decrypt(str, key) {
    const strArr = [...str.toUpperCase()];
    const keyArr = [...key.toUpperCase()];
    let pos = 0;
    let res = strArr.map( item => {
      if (this.abc.includes(item)) {
        let index = this.abc.indexOf(item) - this.abc.indexOf(keyArr[pos]);
        if (index < 0) index += this.abc.length;
        pos = ++pos % keyArr.length;
        return this.abc[index];
      }
      return item;
    } );
    if (this.reverseFlag === true) {
      return res.join('');
    }
    return res.reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;