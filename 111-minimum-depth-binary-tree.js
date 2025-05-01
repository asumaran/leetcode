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
 * @return {number}
 */
var minDepth = function (root) {
  if (root === null) {
    return 0;
  }

  // si sus ramas son null entonces asumimos el nodo como 1
  if (root.left === null && root.right === null) {
    return 1;
  }

  // console.log("root.left->", root.left, "root.right->", root.right);
  // basicamente si un lado del branch es null entonces es desconsiderado y se usa el otro lado
  // para seguir contando la profundidad
  if (root.left === null) {
    return 1 + minDepth(root.right);
  }
  if (root.right === null) {
    return 1 + minDepth(root.left);
  }

  // la idea es detectar cual es la minima rama sin hijos
  // por eso de las alturas de ambos lados quedarse con la altura menor.
  return Math.min(minDepth(root.left), minDepth(root.right));
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// Case 1
const rl = new TreeNode(15);
const rr = new TreeNode(7);
const r = new TreeNode(20, rl, rr);
const l = new TreeNode(9);
const root = new TreeNode(3, l, r);

// Failing test case
// Input: root = [2,null,3,null,4,null,5,null,6]
// Output: 4
// Expected: 5
// const rrrr = new TreeNode(6);
// const rrr = new TreeNode(5, undefined, rrrr);
// const rr = new TreeNode(4, undefined, rrr);
// const r = new TreeNode(3, undefined, rr);
// const root = new TreeNode(2, undefined, r);

console.log(minDepth(root));
