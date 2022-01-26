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
 var detectCycle = function(head) {
  if(!head||!head.next){return null}
  let fast=head,low=head,isCycle=false;
  while(fast&&fast.next){
      fast=fast.next.next
      low=low.next
      if(fast===low){
          isCycle=true
          break
      }

  }
  if(!isCycle){
      return null
  }
  fast=head;
  while(fast!==low){
      fast=fast.next
      low=low.next
  }
  return fast
};
