/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  console.log("------".repeat(20));
  console.log("nums", nums);
  function toBST(start, end, lado) {
    console.log("------".repeat(10));
    console.log("start", start, "end", end, lado);
    if (start > end) {
      console.log("retornamos xq start es mayor que end");
      return null;
    }

    // console.log("start", start, "end", end);
    // conviene hacer .ceil

    let mid = Math.ceil((start + end) / 2);
    console.log("mid", mid);

    const root = new TreeNode(nums[mid]);

    const l = toBST(start, mid - 1, "left");

    // mid = Math.floor((start + end) / 2);
    // console.log("mid (floor)", mid);
    const r = toBST(mid + 1, end, "right");

    root.left = l;
    root.right = r;

    return root;
  }
  // console.log("nums.length - 1", nums.length - 1);
  return toBST(0, nums.length - 1, "root");
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// Case 1
const arr = [-10, -3, 0, 5, 9];

console.log(sortedArrayToBST(arr));
