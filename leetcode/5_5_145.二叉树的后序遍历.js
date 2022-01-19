/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
 */

// @lc code=start

// Definition for a binary tree node.
function TreeNode(data, left, right) {
  this.data = data === undefined ? 0 : data;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
let head = new TreeNode(1, new TreeNode(2, undefined, new TreeNode(3)),new TreeNode("right"));
console.log(head)
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
    if(root===null)return []
    let listStack=[root],statusStack=[0],res=[]
    while(listStack.length&&statusStack.length){
        let status=statusStack.pop()
        switch(status){
            case 0:
                statusStack.push(1)
                let left=listStack[listStack.length-1].left
                if(left){
                    listStack.push(left)
                    statusStack.push(0)
                }
                break;
            case 1:
                statusStack.push(2)
                let right=listStack[listStack.length-1].right
                if(right){
                    listStack.push(right)
                    statusStack.push(0)
                }
                break;
            case 2:
                res.push(listStack.pop().data)
                break
        }
    }
   return res
};
console.log(postorderTraversal(head));

// var postorderTraversal = function (root) {
//   //         getnode(root.left)
//   //         getnode(root.right)
//   //         res.push(root.val)
//   if (!root) return [];
//   const stack1 = [],
//     stack2 = [],
//     res = [];
//   stack1.push(root);
//   /* 根节点的下一步就是去找的左子树 */
//   stack2.push(0);
//   while (stack1.length && stack2.length) {
//     debugger;
//     const status = stack2.pop();

//     switch (status) {
//       /* 压入左子树后的 下一步应该是去找右子树 */
//       case 0:
//         stack2.push(1);
//         const left = stack1[stack1.length - 1].left;
//         if (left) {
//           stack1.push(left);
//           /* 数据栈一旦有新的元素进入 下一步仍是去找它的左子树 */
//           stack2.push(0);
//         }
//         break;
//       /*找完右子树的下一步应是输出当前节点   */
//       case 1:
//         stack2.push(2);
//         const right = stack1[stack1.length - 1].right;
//         if (right) {
//           stack1.push(right);
//           /* 数据栈一旦有新的元素进入 下一步仍是去找它的左子树 */
//           stack2.push(0);
//         }
//         break;
//       case 2:
//         /*到了这里 就是数据栈弹栈的时候了 也就是一般写的函数执行的栈结束的时候 */
//         res.push(stack1.pop().data);
//         break;

//       default:
//         break;
//     }
//   }

//   return res;
// };

// console.log(postorderTraversal(head));
// @lc code=end
