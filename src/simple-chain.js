const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    this.arr.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (typeof position === 'number' && position <= this.getLength()  && position > 0) {
      this.arr.splice(position - 1, 1);
    } else {
      this.arr = [];
      throw new Error();
    };
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let res = this.arr;
    this.arr = [];
    return res.join('~~');
  }
};

module.exports = chainMaker;
