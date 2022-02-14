/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
 * @return {boolean}
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
var root1 = new TreeNode(
  1,
  new TreeNode(2),
  new TreeNode(
    3,
    new TreeNode(4),
    new TreeNode(3, new TreeNode(4), new TreeNode(5))
  )
);

var isBalanced = function (root) {
  return getDep(root) === -1 ? false : true;
  function getDep(node) {
    if (!node) return 0;
    let leftDep = getDep(node.left);
    let rightDep = getDep(node.right);
    if (leftDep === -1 || rightDep === -1) {
      return -1;
    }
    if (Math.abs(leftDep - rightDep) > 1) return -1;
    return Math.max(leftDep, rightDep) + 1;
  }
};
console.log(isBalanced(root1));
// @lc code=end
