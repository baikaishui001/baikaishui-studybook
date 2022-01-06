/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 * 访问target
 */
var detectCycle_Target = function (head) {
  if (!head || !head.next) {
    return null;
  }
  while (head.next) {
    if (!head.target) {
      head.target = true;
    } else {
      return head;
    }
    head = head.next;
  }
  return null;
};
/**
 * @param {ListNode} head
 * @return {boolean}
 * 快慢指针
 */
var detectCycle_Fast_Slow = function (head) {
  if (!head || !head.next) return null;
  let slow = head;
  let fast = head;
  let isCycle=null
  while (fast) {
    slow = slow.next;
    fast = fast.next.next;
    if (fast == slow) {
        isCycle=true
        break
    }
  }
  if(!isCycle){
      return null
  }
  fast=head
  while(slow!=fast){
      slow=slow.next
      fast=fast.next
  }
  return slow
};
// @lc code=end
