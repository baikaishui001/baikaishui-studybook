/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
function ListNode(val,next) {
    this.val = val;
    this.next = next||null;
}
 var partition = function(head, x) {
  let big=new ListNode(-1),bigCur=big;
  empty=new ListNode(-1,head);pre=empty,cur=pre.next;
  while(cur){
      if(cur.val>=x){
        bigCur.next=cur;
        pre.next =cur.next
        cur.next=null
        cur= pre.next
        bigCur=bigCur.next
       
      }else{
        pre=cur
        cur=pre.next
      }
  }
  pre.next=big.next
  return empty.next
};


const head=new ListNode(1)
      head.next=new ListNode(4)
      head.next.next=new ListNode(3)
      head.next.next.next=new ListNode(2)
      head.next.next.next.next=new ListNode(5)
      head.next.next.next.next.next=new ListNode(2)
console.log(partition(head,3))
