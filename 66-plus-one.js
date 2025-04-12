// https://leetcode.com/problems/plus-one/
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let carry = 0;
  let add = 0;
  for (let i = digits.length - 1; i >= 0; i--) {
    if (i === digits.length - 1) {
      add = 1;
    }
    const newVal = digits[i] + add + carry;
    const take = newVal % 10;
    console.log("take", take);
    digits[i] = take;
    carry = parseInt(newVal / 10);
    add = 0;
  }
  console.log("carry", carry);
  if (carry) {
    digits.unshift(carry);
  }
  return digits;
};

console.log(plusOne([-1]));
