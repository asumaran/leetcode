/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // const o = ["{", "[", "("];
  // const c = ["}", "]", "["];

  const si = {
    "{": "}",
    "[": "]",
    "(": ")",
  };

  let cc = 0;
  // let curr;
  let nextClose = [];
  for (let i = 0; i < s.length; i++) {
    switch (true) {
      case Object.keys(si).includes(s[i]):
        nextClose = [`${si[s[i]]}`].concat(nextClose);
        cc += 1;
        break;
      default:
        if (s[i] !== nextClose[0]) {
          return false;
        }
        nextClose.shift();
        cc -= 1;
        break;
    }
  }
  return cc === 0;
};

console.log(isValid("([)]"));
