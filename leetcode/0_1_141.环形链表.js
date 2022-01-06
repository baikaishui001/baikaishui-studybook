/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
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
 * @return {boolean}
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 * 访问target
 */

var hasCycle_Target = function (head) {
  if (!head || !head.next) {
    return false;
  }
  while (head.next) {
    if (!head.target) {
      head.target = true;
    } else {
      return true;
    }
    head = head.next;
  }
  return false;
};
/**
 * @param {ListNode} head
 * @return {boolean}
 * 快慢指针
 */
var hasCycle_Fast_Slow = function (head) {
  if (!head || !head.next) return false;
  let slow = head;
  let fast = head;
  while (fast) {
    slow = slow.next;
    fast = fast.next.next;
    if (fast == slow) {
      return true;
    }
  }

  return false;
};
function hasCycle_hash(head ){
  if (!head || !head.next) return false;
  let mapHash= new Map()
  let currentNode=head
  while(currentNode){
    if(mapHash.has(currentNode)){
      return true
    }else{
      mapHash.set(currentNode,currentNode)
    }
    currentNode=currentNode.next
  }
  return false
}
// @lc code=end
