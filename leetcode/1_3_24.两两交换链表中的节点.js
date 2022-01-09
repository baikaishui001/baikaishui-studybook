/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
 var swapPairs = function(head) {
     if(!head||!head.next)return null
    let emptyNode=new ListNode(0,head)
    let pre=emptyNode,cur=pre.next
    while(cur.next){
        let next=cur.next
        cur.next=next.next
        pre.next=next
        next.next=cur
        // 因为两两交换，
        // cur是每次交换的第一个节点，
        // pre是第一个节点的上一个基点
        pre=cur
        cur=cur.next
    }
    return emptyNode.next
};
// @lc code=end

