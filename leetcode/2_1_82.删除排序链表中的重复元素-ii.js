/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
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
var deleteDuplicates = function(head) {
    if(!head)return head
    let emptyList=new ListNode(-1,head)
    let cur=emptyList, repeatNode
    while(cur.next){
        debugger
        if(cur.next.next&&cur.next.data==cur.next.next.data){
            repeatNode=cur.next.next
            while(repeatNode&&repeatNode.data==cur.next.data)repeatNode=repeatNode.next;
            cur.next=repeatNode
           
        }else{
            cur=cur.next
            
        }
       
    }
    return emptyList.next
};
// @lc code=end

