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
var preorderTraversal = function (root) {
  if (!root) {
    return [];
  }
  const res = [root.val];
  // con spread operator quedaria mejor
  return res
    .concat(preorderTraversal(root.left))
    .concat(preorderTraversal(root.right));

  // diferente approach
  // if (!root) return [];
  // res.push(root.val);
  // if (root.left) preorderTraversal(root.left, res);
  // if (root.right) preorderTraversal(root.right, res);
  // return res;

  // Usando iteracion
};
