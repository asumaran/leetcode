/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const r = [];
  inorder(root, r);
  return r;
};

function inorder(node, r) {
  if (node) {
    inorder(node.left, r);
    r.push(node.val);
    inorder(node.right, r);
  }
}

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// Input: root = [1, null, 2, 3];
// Output: [1,3,2]

// Input: root = [1,2,3,4,5,null,8,null,null,6,7,9]
// Output: [4,2,6,5,7,1,3,9,8]

root = new TreeNode(1);
// root.left = null;
root.right = new TreeNode(2);
root.right.left = new TreeNode(3);

console.log(inorderTraversal(root));
