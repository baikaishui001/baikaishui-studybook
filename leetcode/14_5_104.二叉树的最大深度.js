/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
 * @param {TreeNode} root
 * @return {number}
 */


 function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
 var root1=new TreeNode(
    1,
 
    new TreeNode(
        3,
        new TreeNode(
            5
            
        )
    ),
    new TreeNode(
        2,
       
    ),
)
var maxDepth = function(root) {
    if(root===null)return 0;
    let left=maxDepth(root.left)
    let right=maxDepth(root.right)
    return Math.max(left,right)+1
};
console.log(maxDepth(root1))
// @lc code=end

