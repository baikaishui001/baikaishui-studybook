/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
 * @return {number[]}
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
var preorderTraversal = function(root) {
    if(!root)return []
    let val=[root.val]
    root.left&&val.push(...preorderTraversal(root.left))
    root.right&&val.push(...preorderTraversal(root.right))
    return val
};
console.log(preorderTraversal(root1))
// @lc code=end