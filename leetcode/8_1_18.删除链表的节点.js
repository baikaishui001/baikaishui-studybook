/*
 * @lc app=leetcode.cn id=143 lang=javascript
 *
 * [143] 重排链表
 */

// @lc code=start

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
 var deleteNode = function(head, val) {
    let down=true,empty=new ListNode(-1,head),pre=empty,cur=pre.next;
    while(down&&cur){
        if(cur.val===val){
            pre.next=cur.next;
            cur.next=null;
           down=false  
        }
        pre=cur
        cur=cur.next
    }
    return empty.next
};
let lis1 = new ListNode(1);
    lis1.next = new ListNode(2);
    lis1.next.next = new ListNode(3);
    lis1.next.next.next = new ListNode(4);
    lis1.next.next.next.next = new ListNode(5);
    lis1.next.next.next.next.next = new ListNode(6);
    lis1.next.next.next.next.next.next = new ListNode(7);
console.log(deleteNode(lis1,2))
// @lc code=end
