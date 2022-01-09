/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let emptyNode = new ListNode(-1, head);
  let len = 0;
  let cur = emptyNode;
  while (cur && cur.next) (cur = cur.next), len++;
  cur = emptyNode;
  for (let index = 0; index < len - n; index++) {
    cur = cur.next;
  }
  cur.next = cur.next.next;
  return emptyNode.next;
};
var removeNthFromEnd1 = function (head, n) {
  let emptyNode = new ListNode(-1, head);
  let slow = emptyNode;
  let fast = emptyNode;
  let count = 1;
  while (fast && fast.next) {
    fast = fast.next;
    debugger;
    if (count > n) {
      slow = slow.next;
    }
    count++;
  }
  slow.next = slow.next.next;
  return emptyNode.next;
};
// @lc code=end
