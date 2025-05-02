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
 * @param {number} targetSum
 * @return {boolean}
 */
// let i = 0;
var hasPathSum = function (root, targetSum) {
  // Attempt 1
  // // console.log("i", i, root);
  // if (i === 0) {
  //   console.log("=".repeat(100));
  // }
  // i++;
  // if (root === null) {
  //   console.log(i, ") ", "retorna cero");
  //   return 0;
  // }
  // if (root.left === null && root.right === null) {
  //   console.log(i, ") ", "a sumamos: ", root.val);
  //   return root.val;
  // }
  // // si solo existe una rama
  // if (root.left !== null && root.right === null) {
  //   const x = root.val + hasPathSum(root.left, targetSum);
  //   console.log(i, ") ", "b sumamos", root.val);
  //   return x;
  // }
  // // console.log("root.left", root.left);
  // if (root.left === null && root.right !== null) {
  //   const x = root.val + hasPathSum(root.right, targetSum);
  //   console.log(i, ") ", "c sumamos", root.val);
  //   return x;
  // }
  // // left
  // if (root.left) {
  //   const l = root.val + hasPathSum(root.left, targetSum);
  //   console.log(i, ") ", "d sumamos", root.val);
  //   console.log(i, ") ", "l", l);
  //   if (l === targetSum) {
  //     return true;
  //   }
  // }
  // if (root.right) {
  //   const r = root.val + hasPathSum(root.right, targetSum);
  //   // console.log("e sumamos", root.val);
  //   console.log(i, ") ", "r", r);
  //   if (r === targetSum) {
  //     return true;
  //   }
  // }
  // // console.log(i, ") ");
  // return false;

  // Attempt 2
  if (root === null) {
    return false;
  }

  // Esta solución es bien ingeniosa, se itera el arbol hasta que el target pasado es igual al valor del nodo leaf
  // lo cual quiere decir que la suma de cada nodo al final (o sea cuando ya no tiene mas hijos) se hizo igual al targetSum original
  // como decir, sumTarget 12, y los nodos 2-4-6 vinieron restando al target sum pasado hasta llegar a cero.
  if (root.left === null && root.right === null) {
    return targetSum - root.val === 0;
  } else {
    return (
      hasPathSum(root.left, targetSum - root.val) ||
      hasPathSum(root.right, targetSum - root.val)
    );
  }
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// root = [5,4,8,11,null,13,4,7,2,null,null,null,1]
// tagetSum = 22

const lll = new TreeNode(7);
const llr = new TreeNode(2);
const ll = new TreeNode(11, lll, llr);
const l = new TreeNode(4, ll);
const rl = new TreeNode(13);
const rrr = new TreeNode(1);
const rr = new TreeNode(4, undefined, rrr);
const r = new TreeNode(8, rl, rr);
const theroot = new TreeNode(5, l, r);
// console.log("theroot--->>>", theroot);
const targetSum = 22;
console.log(hasPathSum(theroot, targetSum));
