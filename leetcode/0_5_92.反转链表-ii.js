/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  // debugger
  if (!head || !head.next) return head;
  let emptyNode = new ListNode(-1);
  emptyNode.next = head;
  let pre = emptyNode;
  for (let index = 0; index < left - 1; index++) {
    pre = pre.next;
  }
  let cur = pre.next; 
  let next = cur.next; 
  for (let index = 0; index < right - left; index++) {
    next = cur.next; 
    cur.next = next.next;
    next.next = pre.next;
    pre.next = next;
  }
  return emptyNode.next;
};

// @lc code=end
