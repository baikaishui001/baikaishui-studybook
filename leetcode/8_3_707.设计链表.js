/*
 * @lc app=leetcode.cn id=707 lang=javascript
 *
 * [707] 设计链表
 */

// @lc code=start
class Node {
  constructor(val, next) {
    this.val = val; //数据域
    this.next = next || null; //指针域 =》js中没有指针，可以看做引用域
  }
}
class MyLinkedList {
  constructor() {
    this.list = new Node(-1, null);
  }
  get(index) {
    let i=-1,cur=this.list
    while (cur) {
      i++;
      cur = cur.next;
      if(i===index){
          return cur?cur.val:-1
      }
    }
    return -1;
  }
  addAtHead(val) {
    let newNode = new Node(val, this.list.next);
    this.list.next = newNode;
  }
  addAtTail(val) {
    let cur = this.list;
    while (cur && cur.next) {
      cur = cur.next;
    }
    cur.next = new Node(val);
  }
  addAtIndex(index, val) {
    let cur = this.list,
      i = -1;
    while (cur) {
      if (index - 1 == i) {
        cur.next = new Node(val, cur.next || null);
        break;
      }
      cur = cur.next;
      i++;
    }
  }
  deleteAtIndex(index) {
    let pre=this.list,cur=this.list,i=-1
    while(cur){
        i++
        pre=cur
        cur=cur.next
        if(index===i){
            pre.next=cur?cur.next:null
            break
        }
    }
  }
}
/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
//  ["MyLinkedList","addAtHead","addAtTail","addAtIndex","get","deleteAtIndex","get"]
//  [[],[1],[3],[1,2],[1],[1],[1]]
// @lc code=end
var obj = new MyLinkedList();
obj.addAtHead(1);
obj.addAtTail(3);
obj.addAtIndex(1, 2);

console.log(obj.get(1));
obj.deleteAtIndex(1);

console.log(obj.list)
console.log(obj.get(1));

// obj.addAtTail(val)
// obj.addAtIndex(index,val)
// obj.deleteAtIndex(index)
