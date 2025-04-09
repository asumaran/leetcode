/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let c = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[c] = nums[i];
      c++;
    }
  }
  return c;
};

// deberia retornar 2, nums [0,1,4,0,3,_,_,_];
const arr = [3, 2, 2, 3];
console.log(removeElement(arr, 3));
console.log("arr", arr);
