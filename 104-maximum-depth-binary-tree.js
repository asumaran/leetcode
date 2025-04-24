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
var maxDepth = function (root, lado) {
  // console.log("-".repeat(10));
  if (root) {
    // This one took me a little bit to understand,
    // la explicación sería más o menos la siguiente:
    // se devuelve 1 + maximo de veces que logra entrar a llamar a la funcion recursiva
    // o sea cada vez que root (left o right) sea un nodo valido, eo quiere decir que hay un nivel mas
    // por lo tanto se retorna 1 + el mayor de() maxDepth(l) o maxDepth(r))
    const l = maxDepth(root.left, "left");
    const r = maxDepth(root.right, "right");
    console.log("-----");
    console.log("lado", lado, "l", l);
    console.log("lado", lado, "r", r);
    return 1 + Math.max(l, r);
  } else {
    return 0;
  }
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
const rrr = new TreeNode(42);
const l = new TreeNode(9);
const rl = new TreeNode(15);
const rr = new TreeNode(7, undefined, rrr);
const r = new TreeNode(20, rl, rr);
const t = new TreeNode(3, l, r);
console.log("-".repeat(100));

console.log(maxDepth(t, "root"));
