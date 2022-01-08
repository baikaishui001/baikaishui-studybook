/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup1 = function (head, k) {
  if (!head || !head.next || k === 1) return head;
  let tempNode = new ListNode(-1, head);
  let second = 1;
  let cur = head;
  while (cur.next) {
    second++;
    cur = cur.next;
  }
  second = parseInt(second / k);
  let pre = tempNode;
  (cur = pre.next), (next = cur.next);
  while (second > 0) {
    second--;
    let count = 1;
    while (cur && cur.next && count < k) {
      count++;
      next = cur.next;
      cur.next = next.next;
      next.next = pre.next;
      pre.next = next;
    }
    if (cur && cur.next) {
      pre = cur;
      cur = pre.next;
      next = cur.next;
    }
  }
  return tempNode.next;
};
var reverseKGroup = function (head, k) {
  if (!head || !head.next || k === 1) return head;
  let tempNode = new ListNode(-1, head);
  let c = 0;
  let endNode = tempNode.next;
  let preNode = tempNode;
  while (endNode) {
    if (++c % k === 0) {
      preNode = reverse(preNode, endNode);
      endNode = preNode.next;
    } else {
      endNode = endNode.next;
    }
  }

  return tempNode.next;
};
var reverse = function (preNode, endnode) {
  let pre = preNode,
    cur = pre.next,
    next;
  while (next !== endnode) {
    debugger;
    next = cur.next;
    cur.next = next.next;
    next.next = pre.next;
    pre.next = next;
  }
  return cur;
};

// @lc code=end
