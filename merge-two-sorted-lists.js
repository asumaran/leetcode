/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

class Node {
  constructor(data) {
    this.val = data;
    this.next = null;
  }
}

function print_list(list) {
  let r = "";
  let head = list;
  while (head) {
    r += head.val;
    if (head.next) {
      r += " -> ";
    }
    head = head.next;
  }
  return r;
}

const l13 = new Node(4);
const l12 = new Node(2);
l12.next = l13;
const l1 = new Node(1);
l1.next = l12;

// console.log(print_list(l1));

const l23 = new Node(4);
const l22 = new Node(3);
l22.next = l23;
const l2 = new Node(1);
l2.next = l22;

// console.log(print_list(l2));

//  1 -> 2 -> 4     1 -> 3 -> 4

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  const base = new ListNode(-1);
  // guardamos como referencia la base.
  let res = base;
  while (list1 && list2) {
    // si el primer item de la lista1 es mayor que el primer item de la lista2
    if (list1.val > list2.val) {
      // entonces agregamos a la nueva lista "res" el nodo de la lista2 primero ya que es menor.
      res.next = list2;
      // convertimos la lista2 lo que queda (o sigue) de la lista2
      // lo que esto va a provocar es para el siguiente bucle comparar la lista1 con el resto de lista2
      list2 = list2.next;
    } else {
      // si el primer node de la lista1 es menor que el primer nodo de la lista2
      // entonces ponemos el nodo de la lista 1 como siguiente en la nueva lista.
      res.next = list1;
      // convertimos el resto de lista1 como lista1
      list1 = list1.next;
    }
    res = res.next;
  }
  // el siguiente nodo de la lista es el que queda de la lista1 o lista2
  res.next = list1 || list2;

  return base.next;
};
// [1, 2, 4]   [1, 3, 4]
console.log(print_list(mergeTwoLists(l1, l2)));
