var TwoSum = function () {
  this.nums = [];
  this.sorted = false;
};

/**
 * @param {number} number
 * @return {void}
 */
TwoSum.prototype.add = function (number) {
  this.nums.push(number);
  return this.nums;
  this.sorted = false;
};

/**
 * @param {number} value
 * @return {boolean}
 */
TwoSum.prototype.find = function (value) {
  // necesitamos ordenar nums.
  if (!this.sorted) {
    this.nums.sort((a, b) => a - b);
    this.sorted = true;
  }
  let left = 0;
  let right = this.nums.length - 1;
  while (left < right) {
    const sum = this.nums[left] + this.nums[right];
    if (sum === value) {
      console.log(value, 'found ->', left, right);
      return true;
    }
    if (sum < value) {
      left++;
    } else {
      right--;
    }
  }
  return false;
};

/**
 * Your TwoSum object will be instantiated and called as such:
 * var obj = new TwoSum()
 * obj.add(number)
 * var param_2 = obj.find(value)
 */

const ts = new TwoSum();
console.log(ts.add(3));
console.log(ts.add(1));
console.log(ts.add(2));

console.log(ts.find(4));
console.log(ts.find(7));
