/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
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
var rightSideView = function(root) {
    if(!root)return [];
    let result=[]
    let queue=[[root,0]]
    while(queue.length){
        let [{val,left,right},dep]=queue.shift()
        result[dep]=val
        dep+=1
        if(left){
            queue.push([left,dep])
        }
        if(right){
            queue.push([right,dep])
        }
    }
    return result
};
// @lc code=end

