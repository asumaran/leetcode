/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (p === null && q === null) {
    console.log("x");
    return true;
  }

  // si cualquiera de los nodos es null entonces retornamos falso
  // porque no seria un nodo valido
  if (p === null || q === null) {
    console.log("x2");
    return false;
  }

  return (
    p.val === q.val &&
    isSameTree(p.left, q.left) &&
    isSameTree(p.right, q.right)
  );
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// Case 1.
// Input: p = [1,2,3], q = [1,2,3]
// Output: true
// const pl = new TreeNode(2);
// const pr = new TreeNode(3);
// const p = new TreeNode(1, pl, pr);

// const ql = new TreeNode(2);
// const qr = new TreeNode(3);
// const q = new TreeNode(1, ql, qr);

// Input: p = [1,2], q = [1,null,2]
// Output: false

const pl = new TreeNode(2);
const p = new TreeNode(1, pl);

// const ql = new TreeNode(null);
const qr = new TreeNode(2);
const q = new TreeNode(1, undefined, qr);

// Input: p = [1,2,1], q = [1,1,2]
// Output: false

console.log(isSameTree(p, q));
