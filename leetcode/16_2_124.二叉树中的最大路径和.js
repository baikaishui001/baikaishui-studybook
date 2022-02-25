/*
 * @lc app=leetcode.cn id=124 lang=javascript
 *
 * [124] 二叉树中的最大路径和
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
var maxPathSum = function(root) {
    let maxResult=Number.MIN_SAFE_INTEGER
    const dep=function(root){
        if(!root)return 0;
        const left=dep(root.left);
        const right=dep(root.right)
        const curNodeSum=root.val+left+right
        maxResult=Math.max(maxResult,curNodeSum)
        let outNodeSum=root.val+Math.max(left,right)
        return outNodeSum>0?outNodeSum:0
    }
    dep(root)
    return  maxResult
};
// @lc code=end

