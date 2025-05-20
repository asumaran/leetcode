/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  // // First attempt
  // console.log('-'.repeat(100));
  // const counter = {};
  // for (let i = 0; i < nums.length / 2; i++) {
  //   if (i === nums.length - 1 - i) {
  //     counter[nums[i]] = (counter[nums[i]] ?? 0) + 1;
  //   } else {
  //     counter[nums[i]] = (counter[nums[i]] ?? 0) + 1;
  //     counter[nums[nums.length - 1 - i]] =
  //       (counter[nums[nums.length - 1 - i]] ?? 0) + 1;
  //   }
  // }
  // const k = Object.keys(counter);
  // let res = k[0]; // primer item
  // for (let j = 1; j < k.length; j++) {
  //   if (counter[res] < counter[k[j]]) {
  //     res = k[j];
  //   }
  // }
  // return parseInt(res);

  // Second attempt
  console.log('-'.repeat(100));
  const counter = {};
  for (let i = 0; i < nums.length / 2; i++) {
    counter[nums[i]] = (counter[nums[i]] ?? 0) + 1;
    if (i !== nums.length - 1 - i) {
      counter[nums[nums.length - 1 - i]] =
        (counter[nums[nums.length - 1 - i]] ?? 0) + 1;
    }
  }

  for (let c in counter) {
    // solo es cuestion de comparar si tiene mas que la mitad.
    if (counter[c] > nums.length / 2) {
      return parseInt(c);
    }
  }

  return 0;
};

console.log(majorityElement([3, 2, 3])); // 3
// console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // 2
