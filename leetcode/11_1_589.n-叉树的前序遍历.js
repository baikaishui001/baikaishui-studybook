/*
 * @lc app=leetcode.cn id=589 lang=javascript
 *
 * [589] N 叉树的前序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
 var preorder = function(root) {
    if(!root){return []}
    let result=[root.val||null]
    if(root.children){
        root.children.forEach(element => {
           result.push( ...preorder(element))
        });
    }
    return result
};
var preorder1 = function(root) { 
    if(!root){return []}
    let result=[];
    var loop=function(node){
        result.push(node.val||null)
        if(node.children){
            node.children.forEach(element => {
               loop(element)
            });
        }
    }
   loop(root)
    return result
};
// @lc code=end

