/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
 * @return {ListNode}
 */
//recursion递归
var reverseList_recursion = function (head) {
  if (!head || !head.next) {
    return head;
  }
  let newhead = reverseList_recursion(head.next);
  head.next.next = head;
  head.next = null;
  return newhead;
};
//pre cur next
var reverseList_pre_cur = function (head) {
  if (!head || !head.next) {
    return head;
  }
  let pre = null,
    cur = head,
    next = head.next;
  while (cur) {
    cur.next = pre;
    pre = cur;
    (cur = next) && (next = next.next);
  }
  return pre;
};
// @lc code=end
