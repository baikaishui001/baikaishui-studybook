/*
 * @lc app=leetcode.cn id=662 lang=javascript
 *
 * [662] 二叉树最大宽度
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
            5,
           
        ),
        new TreeNode(
            3,
           
        ),
       
    ),
    new TreeNode(
        2,
        undefined,
        new TreeNode(
            9
            
        )
    )
)
var widthOfBinaryTree = function(root){
    if(root==null)return 0
    let max=1n,list=[[0n,root]];
    while(list.length){
        let width=list[list.length-1][0]-list[0][0]+1n
        if(width>max)max=width
        let tem=[]
        for (const [i,item] of list) {
           item.left && tem.push([i*2n,item.left])
           item.right && tem.push([i*2n+1n,item.right])
        }
        list=tem
    }
    return Number(max)
}

console.log(widthOfBinaryTree(root1))
//   console.log(widthOfBinaryTree1(root1))
// @lc code=end

