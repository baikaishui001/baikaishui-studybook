/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function (head, k) {
  let list = new Array(k).fill(null);
  let len = 0,
    cur = head;
  while (cur) {
    len++;
    cur = cur.next;
  }
  let itemLen = ~~(len / k);
  let remaining = len % k;
  cur = head;
  for (let i = 0; i < list.length&& cur !== null; i++) {
    list[i]=cur
    let length=itemLen+(remaining>0?1:0)
    remaining--
    for(let j=1;j<length&&cur;j++){
      cur=cur.next
    }
    let next=cur.next
    cur.next=null
    cur=next
  }
  return list
};
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);
head.next.next.next.next.next = new ListNode(6);
head.next.next.next.next.next.next = new ListNode(7);
head.next.next.next.next.next.next.next = new ListNode(8);
head.next.next.next.next.next.next.next.next = new ListNode(9);
head.next.next.next.next.next.next.next.next.next = new ListNode(10);
head.next.next.next.next.next.next.next.next.next.next = new ListNode(11);
console.log(splitListToParts(head, 3));