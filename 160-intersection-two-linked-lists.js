/*
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  // Attempt1 – brute force
  // let ra = headA;
  // let rb = headB;
  // while (ra) {
  //   while (rb) {
  //     if (ra === rb) {
  //       return ra;
  //     } else {
  //       rb = rb.next;
  //     }
  //   }
  //   rb = headB;
  //   ra = ra.next;
  // }
  // return null;

  // Attempt2 –using hash tables
  const bnodes = new Set();
  while (headB) {
    bnodes.add(headB);
    headB = headB.next;
  }

  while (headA) {
    if (bnodes.has(headA)) {
      return headA;
    }

    headA = headB.next;
  }

  return null;
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}

// const lc = new ListNode(8);
// lc.next = new ListNode(4);
// lc.next.next = new ListNode(5);

// const la = new ListNode(4);
// la.next = new ListNode(1);
// la.next.next = lc;

// const lb = new ListNode(5);
// lb.next = new ListNode(6);
// lb.next.next = new ListNode(1);
// lb.next.next.next = lc;

// Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
// Output: Intersected at '8'

const lc = new ListNode(3);
const la = lc;
const lb = new ListNode(2);
lb.next = lc;

console.log(getIntersectionNode(la, lb));
