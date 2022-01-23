class List {
    constructor(data) {
      this.data = data; //数据域
      this.next = null; //指针域 =》js中没有指针，可以看做引用域
    }
  }
  let next = null;
  head = new List(1);
  head.next = new List(2);
  head.next.next = new List(3);
  head.next.next.next = new List(4);
  head.next.next.next.next = new List(5);
  head.next.next.next.next.next = new List(6);
  head.next.next.next.next.next.next = new List(7);
  head.next.next.next.next.next.next.next = new List(8);
  /**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {number}
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 var getKthFromEnd = function(head, k) {
  let fast = head
  let low = head
  let cout = 0
  while(fast) {
      fast = fast.next
      if (cout >= k) {
          low = low.next
      }
      cout++
  }
  return low
};
console.log(getKthFromEnd(head,2))