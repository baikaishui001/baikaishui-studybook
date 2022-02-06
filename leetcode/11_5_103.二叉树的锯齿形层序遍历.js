/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层序遍历
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
 * @return {number[][]}
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
var root1 = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4)),
  new TreeNode(3, undefined, new TreeNode(5))
);

var zigzagLevelOrder = function (root) {
    if(!root)return []
    let result=[]
    let curLevaQueue=[root]
    let leva=0
    while(curLevaQueue.length){
       let vals=[];
       let nextLevaQueue=[]
        while(curLevaQueue.length){
           let {val,left,right}=curLevaQueue.shift()
            if(leva%2){
                vals.unshift(val)
            }else{
                vals.push(val)
            }
    
            
            left&&nextLevaQueue.push(left)
            right&&nextLevaQueue.push(right)
        }
        result.push(vals)
        leva++
        curLevaQueue=nextLevaQueue

    }
    return result
};

console.log(zigzagLevelOrder(root1));
// @lc code=end
