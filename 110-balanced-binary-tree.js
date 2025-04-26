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
var isBalanced = function (root) {
  console.log("-".repeat(100));
  function getNodeHeight(node, side) {
    // console.log("node", node, "side", side);
    if (node === null) {
      return 0;
    }

    const lh = getNodeHeight(node.left);
    const rh = getNodeHeight(node.right);

    // en caso cada nodo por su cuenta sea desbalanceado.
    if (lh === -1 || rh === -1) {
      return -1;
    }

    if (Math.abs(lh - rh) > 1) {
      return -1;
    }

    console.log("resultado", 1 + Math.max(lh, rh));
    return 1 + Math.max(lh, rh);
  }
  // console.log("root", root);

  if (root === null) {
    return true;
  }

  return getNodeHeight(root) !== -1;
};

// Leetcode dice que un arbol binario es balanceado cuando
// la altura de su rama izquierda **PARA CADA NODO** es no mayor que uno de la altura de su rama derecha
// la altura de una rama es la distancia desde el nodo hasta el ultimo
// nodo de su lado izq o derecho sin hijos (o sea una hoja).

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// Case 1
// Input: root = [3,9,20,null,null,15,7]
// Output: true

const l = new TreeNode(9);
const rl = new TreeNode(15);
const rr = new TreeNode(7);
const r = new TreeNode(20, rl, rr);
const root = new TreeNode();

// Failing case
// Input: root = [1,null,2,null,3]
// Output: false

// const rr = new TreeNode(3);
// const r = new TreeNode(2, null, rr);
// const root = new TreeNode(1, undefined, r);

// Failing case
// [1,2,2,3,null,null,3,4,null,null,4]
// false

console.log(isBalanced(root));
