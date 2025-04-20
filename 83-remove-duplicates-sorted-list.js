/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  let res = head;
  while (res) {
    // tenemos que checar si nex existe antes de leer su valor.
    if (res.next && res.val === res.next.val) {
      res.next = res.next.next;
    } else {
      res = res.next;
    }
  }
  return head;
};

function print_list(list) {
  // console.log("print_list1");
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

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const n5 = new ListNode(3);

const n4 = new ListNode(3);
n4.next = n5;

const n3 = new ListNode(2);
n3.next = n4;

const n2 = new ListNode(1);
n2.next = n3;

const n1 = new ListNode(1);
n1.next = n2;

console.log(print_list(deleteDuplicates(n1)));
