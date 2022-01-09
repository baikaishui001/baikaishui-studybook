/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  if (!head) return head;
  let bigList = new ListNode(-1),smallList = new ListNode(-1),bigNode = bigList,smaillNode = smallList,cur = head;
  while (cur) {
    if (cur.data < x) {
      smaillNode.next = cur;
      smaillNode = cur;
    } else {
      bigNode.next = cur;
      bigNode = cur;
    }
    cur = cur.next;
  }
  bigNode.next=null
  smaillNode.next = bigList.next;
  return smallList.next;
};
// @lc code=end
