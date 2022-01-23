/*
 * @lc app=leetcode.cn id=143 lang=javascript
 *
 * [143] 重排链表
 */

// @lc code=start

function ListNode(data, next) {
  this.data = data === undefined ? 0 : data;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
    let empty= new ListNode(-1,head),right=empty,left=empty;
    while(right&&right.next){
        right=right.next.next
        left=left.next
    }
    right=left.next
    left.next=null
    left=head;
    right=reverseList(right)
    while(right&&left){
        let cleft=left.next
        let cRight=right.next
        right.next=left.next
        left.next=right
        left=cleft
        right=cRight
    }
    return empty.next
}

var reverseList = function (head) {
    let empty=new ListNode(-1),cur=head;
    while(cur){
        let next=cur.next
        cur.next=empty.next
        empty.next=cur
        cur=next
    }
    return empty.next
}
let lis1 = new ListNode(1);
    lis1.next = new ListNode(2);
    lis1.next.next = new ListNode(3);
    lis1.next.next.next = new ListNode(4);
    lis1.next.next.next.next = new ListNode(5);
    lis1.next.next.next.next.next = new ListNode(6);
    lis1.next.next.next.next.next.next = new ListNode(7);
var reorderList1= function(head){
    let arr=[];
    while(head){
        let cur=head.next
        head.next=null;
        arr.push(head)
        head= cur
    }
  
    let cur=arr.shift(),i=0,headL=cur
    while(arr.length){
        cur.next=i++%2===0?arr.pop():arr.shift()
        cur=cur.next
    }
    // console.log(headL)
    return headL
}
console.log(reorderList1(lis1))
// @lc code=end
