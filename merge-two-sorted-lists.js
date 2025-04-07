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

console.log(print_list(l1));

const l23 = new Node(4);
const l22 = new Node(3);
l22.next = l23;
const l2 = new Node(1);
l2.next = l22;

console.log(print_list(l2));

//  1 -> 2 -> 4     1 -> 3 -> 4

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  const base = new ListNode(-1);
  let res = base;
  while (list1 && list2) {
    if (list1.val > list2.val) {
      res.next = list2;
      list2 = list2.next;
    } else {
      res.next = list1;
      list1 = list1.next;
    }
    res = res.next;
  }
  res.next = list1 || list2;

  return base.next;
};

// [1, 2, 4]   [1, 3, 4]
console.log(print_list(mergeTwoLists(l1, l2)));
