/*
 * @lc app=leetcode.cn id=138 lang=javascript
 *
 * [138] 复制带随机指针的链表
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */

// var copyRandomList = function (head) {
//   if (!head) {
//     return head;
//   }
//   let cur = head;
//   while (cur) {
//     nodeItem = new ListNode(cur.data);
//     nodeItem.random = cur.random;
//     // next=cur.next
//     nodeItem.next = cur.next;
//     // nodeItem.target="new"
//     cur.next = nodeItem;
//     cur = nodeItem.next;
//   }
//   cur = head.next;
//   while (cur) {
//     if (cur.random) {
//       cur.random = cur.random.next;
//     }
//     cur = cur.next?.next;
//   }
//   newList = head.next;
//   cur = head;
//   while (cur) {
//     newCur = cur.next;
//     cur.next = newCur.next;
//     if (cur.next) {
//       newCur.next = cur.next.next;
//     }
//     cur = cur.next;
//   }
//   return newList;
// };






var copyRandomList = function (head) {
    if(!head)return head
    let newList=[];
    let oldList=[];
    let cur=head,newNode=newNode.next

    while(cur){
        newList.push(new ListNode(cur.data))
        oldList.push(cur)
        cur=cur.next
    }
    oldList.forEach((item,key) => {
        if(newList[key+1]){
            newList[key].next=newList[key+1]
        }
        if(oldList[key].random){
            let randomKey=oldList.findIndex(v=>v==oldList[key].random)
            newList[key].random=newList[randomKey]
        }
    });
    return newList[0]
}
// @lc code=end
