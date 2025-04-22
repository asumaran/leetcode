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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (root === null) {
    return true;
  }

  function is_mirror(l, r) {
    // si el valor del nodo de ambos lados es diferente entonces descartar inmediatamente.
    console.log("l", l, "r", r);

    // si solo uno de los nodos es nulo entonces no son iguales
    if ((l === null && r !== null) || (r === null && l !== null)) {
      return false;
    }

    // if (l.val !== r.val) {
    //   return false;
    // }

    // si ambas ramas opuestas son nulll entonces son iguales
    // if (
    //   l.left === null &&
    //   r.right === null &&
    //   l.right === null &&
    //   r.left === null
    // ) {
    //   return true;
    // }

    if (l && r) {
      return (
        l.val === r.val &&
        is_mirror(l.left, r.right) &&
        is_mirror(l.right, r.left)
      );
    }

    return true;
  }

  return is_mirror(root.left, root.right);
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// const ll = new TreeNode(3);
// const lr = new TreeNode(4);
// const l = new TreeNode(2, ll, lr);

// const rl = new TreeNode(4);
// const rr = new TreeNode(3);
// const r = new TreeNode(2, rl, rr);

// const t = new TreeNode(1, l, r);

// Failing case
const l = new TreeNode(2);
const r = new TreeNode(2);
const t = new TreeNode(1, l, r);

console.log(isSymmetric(t));
