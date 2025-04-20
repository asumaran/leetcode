/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  console.log("------------------------");
  while (m + n) {
    console.log("m", m, "n", n, "l", nums1[m - 1], "r", nums2[n - 1]);
    if (nums2[n - 1] === undefined) {
      console.log("saltamos");
      n--;
      continue;
    }

    if (nums1[m - 1] > nums2[n - 1]) {
      console.log("  l >", "antes:   ", JSON.stringify(nums1));
      nums1[m + n - 1] = nums1[m - 1];
      console.log("  l >", "despues: ", JSON.stringify(nums1));
      m--;
    } else if (nums1[m - 1] === nums2[n - 1]) {
      console.log("  ===", "antes:   ", JSON.stringify(nums1));
      nums1[m + n - 1] = nums1[m - 1];
      // nums1[m + n - 0] = nums1[m - 1];
      console.log("  ===", "despues: ", JSON.stringify(nums1));
      m--;
      // n--;
    } else {
      console.log("  r >", "antes:   ", JSON.stringify(nums1));
      nums1[m + n - 1] = nums2[n - 1];
      console.log("  r >", "despues: ", JSON.stringify(nums1));
      n--;
    }
  }
  console.log("nums1", JSON.stringify(nums1));
  return "";
};

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]

// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]

// Input: nums1 = [0], m = 0, nums2 = [1], n = 1
// Output: [1]

// [-1,0,0,3,3,3,0,0,0], 6, [1,2,2], 3
// [-1,0,0,1,2,2,3,3,3]

// [0,0,3,0,0,0,0,0,0], 3, [-1,1,1,1,2,3], 6
// [-1,0,0,1,1,1,2,3,3]

console.log(merge([0, 0, 3, 0, 0, 0, 0, 0, 0], 3, [-1, 1, 1, 1, 2, 3], 6));
