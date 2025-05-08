/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// He resuelto este problema anteriormente hace varios años aquí:
// https://github.com/asumaran/algorithms/blob/master/linked-lists/detectCycle.js
// asi que aqui es casi identico con unas pequeñas diferencias.
var hasCycle = function (head) {
  // Attempt 1
  // if (!head || !head.next) {
  //   return false;
  // }
  // const slow = head;
  // const fast = head.next.next; // para que sea circular al menos tiene que haber un next, el siguiente next puede ser null.
  // // mientras:
  // // slow exista
  // // fast exista
  // // fast.next exista
  // while (slow !== null && fast !== null && fast.next !== null) {
  //   // dado que no hay otra forma y los valores pueden repetirse
  //   // estamos comparando por referencia.
  //   if (slow === fast) {
  //     return true;
  //   }
  //   slow = slow.next;
  //   fast = fast.next.next;
  // }
  // return false;

  // Attempt 2
  const slow = head;
  const fast = head;
  // slow es obvio que existe, no hay necesidad de comprobarlo.
  // mientras:
  // fast exista
  // fast.next exista
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    // dado que no hay otra forma y los valores pueden repetirse
    // estamos comparando por referencia.
    if (slow === fast) {
      return true;
    }
  }

  return false;
};
