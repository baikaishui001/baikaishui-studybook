/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
let preorder1 = [3, 9, 20, 15, 7],
  inorder1 = [9, 3, 15, 20, 7];
//   前     中
var buildTree = function (preorder, inorder) {
  if (!preorder.length || !inorder.length) {
    return null;
  }
  let inIndex = 0; 
  while (inorder[inIndex] != preorder[0]) ++inIndex;
  let le_pre = [],
    le_in = [],
    ri_pre = [],
    ri_in = [];
  for (let i = 0; i < inIndex; i++) {
    le_pre.push(preorder[i + 1]);
    le_in.push(inorder[i]);
  }
  for (let i = inIndex + 1; i < inorder.length; i++) {
    ri_pre.push(preorder[i]);
    ri_in.push(inorder[i]);
  }
  let root = new TreeNode(preorder[0]);
  root.left = buildTree(le_pre, le_in);
  root.right = buildTree(ri_pre, ri_in);
  return root;
};

console.log(buildTree(preorder1, inorder1));
var buildTree1 = function (preorder, inorder) {
    if(preorder.length===0)return null
    const rootVal = preorder[0];
    const inRootKey=inorder.indexOf(rootVal)
    const root=new TreeNode(rootVal)
    root.left=buildTree1(preorder.slice(1,inRootKey+1),inorder.slice(0,inRootKey))
    root.left=buildTree1(preorder.slice(inRootKey+1),inorder.slice(inRootKey+1))
    return root
}



console.log(buildTree1(preorder1,inorder1))
// @lc code=end
