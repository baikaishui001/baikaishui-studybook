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
var kthToLast = function(head, k) {
    let stack=[],cur=head;
    while(cur){
        stack.push(cur)
        cur=cur.next
    }
    return stack[stack.length-k].data
};
console.log(kthToLast(head,2))