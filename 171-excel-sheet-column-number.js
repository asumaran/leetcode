/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
  console.log('-'.repeat(100));
  let res = 0;
  for (let i = 0; i < columnTitle.length; i++) {
    console.log({ i });
    const n = columnTitle[i].charCodeAt(0) - 'A'.charCodeAt(0) + 1;
    res = res * 26 + n;
    console.log({ n });
  }
  return res;
};

console.log(titleToNumber('A')); //1
console.log(titleToNumber('AB')); //28
console.log(titleToNumber('ZY')); //701

// console.log('A'.charCodeAt(0));
// console.log('Z'.charCodeAt(0));

// console.log('A'.charCodeAt(0));
