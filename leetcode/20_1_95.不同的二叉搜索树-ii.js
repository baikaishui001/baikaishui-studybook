/*
 * @lc app=leetcode.cn id=95 lang=javascript
 *
 * [95] 不同的二叉搜索树 II
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
var generateTrees = function(n) {
    if(n===0)return []
    let getBSTnum=(left,right)=>{
        if(left>right)return [null]
        if(left===right)return [new TreeNode(left)]
        let result=[]
        for (let i = left; i <= right; i++) {
           let leftTr = getBSTnum(left , i-1)
           let rightTr = getBSTnum(i+1,right)
           for (const leftNode of leftTr) {
               for (const rightNode of rightTr) {
                let root = new TreeNode(i)
                root.right= rightNode
                root.left= leftNode
                result.push(root)
               }
           }            
        }
        return result 
    }
    return getBSTnum(1,n)
};
const nodeList = generateTrees(3)
console.log(nodeList)
// console.log(nodeList)
// var preorderTraversal = function(root) {
//     let res = [];
//     // 遍历函数
//     function traversal(root) {
//         if (root) {
//             // 访问根节点的值
//             res.push(root.val);
//             if (root.left) {
//                 // 递归遍历左子树
//                 traversal(root.left);
//             }else{
//                 res.push(null)
//             }
//             if (root.right) {
//                 // 递归遍历右子树
//                 traversal(root.right);
//             }else{
//                 res.push(null)
//             }
//         }
//     };
//     traversal(root);
//     return res;
// };
// for (const iterator of nodeList) {
//     console.log(preorderTraversal(iterator))
// }
// console.log()
// @lc code=end

