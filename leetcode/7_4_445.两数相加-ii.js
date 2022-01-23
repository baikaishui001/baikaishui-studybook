/*
 * @lc app=leetcode.cn id=445 lang=javascript
 *
 * [445] 两数相加 II
 */
 function ListNode(val, next) {
         this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let stack1=[],stack2=[],cur=l1;
    let head=new ListNode(-1)
    while(cur){
        stack1.push(cur.val)
        cur=cur.next
    }
    cur=l2
    while(cur){
        stack2.push(cur.val)
        cur=cur.next;
    }
    var ten=0;
    while(stack1.length||stack2.length||ten){
        let num1=stack1.pop()||0
        let num2=stack2.pop()||0    
        let result=num1+num2+ten;
        ten=result/10|0
        let newNode=new ListNode(result%10,head.next)
        head.next=newNode

    }
    return head.next
};
var l1=new ListNode(7)
l1.next=new ListNode(2)
l1.next.next=new ListNode(4)
l1.next.next.next=new ListNode(3)

var l2=new ListNode(5)
l2.next=new ListNode(6)
l2.next.next=new ListNode(4)
console.log(addTwoNumbers(l1,l2))
// @lc code=end

