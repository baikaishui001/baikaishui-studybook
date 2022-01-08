/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
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
var rotateRight = function(head, k) {
    if(!head)return null
    if(k==0)return head
    let endNode=head
    let size=1
    while(endNode.next)endNode=endNode.next,size++
    endNode.next=head

    for (let index = 0; index <size-(k%size)-1; index++) {
       head=head.next
        
    }
  let cur=head.next
  head.next=null
    return cur
};
// @lc code=end

