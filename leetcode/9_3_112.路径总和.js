/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
 */

// @lc code=start
/**
 * Definition for a binary tree node.

 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var root1=new TreeNode(5,
    new TreeNode(
        8,
        new TreeNode(
            4,
            new TreeNode(1) 
        ),
        new TreeNode(13) 
    ),
    new TreeNode(
        4,
        undefined,
        new TreeNode(
            11,
            new TreeNode(2),
            new TreeNode(7) 
        ),
    )
)
var hasPathSum = function(root, targetSum) {
    if(!root){return false}
    if(!root.left&&!root.right)return root.val===targetSum
    targetSum-=root.val; 
    return hasPathSum(root.left,targetSum)||hasPathSum(root.right,targetSum)
};
console.log(hasPathSum(root1,22))
// @lc code=end

