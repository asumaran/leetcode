/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number[][]}
 */
var findMissingRanges = function (nums, lower, upper) {
  const n = [lower - 1, ...nums, upper + 1];
  const res = [];
  for (let i = 0; i < n.length; i++) {
    if (n[i + 1] - n[i] > 1) {
      res.push([n[i] + 1, n[i + 1] - 1]);
    }
  }
  return res;
};

// Input: nums = [0,1,3,50,75], lower = 0, upper = 99
// Output: [[2,2],[4,49],[51,74],[76,99]]

console.log(findMissingRanges([0, 1, 3, 50, 75], 0, 99)); //[[2,2],[4,49],[51,74],[76,99]]
// console.log(findMissingRanges([], 1, 1));
// console.log(findMissingRanges([], -3, -1));
// console.log(findMissingRanges([-1], -2, -1)); // [[-2,-2]]
// console.log(findMissingRanges([-1], -1, 0)); // [[0,0]]
// console.log(findMissingRanges([-1], -2, 0)); // [[0,0]]
