/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
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
 * @return {TreeNode}
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
var root1 = new TreeNode(
  1,

  new TreeNode(21, new TreeNode(22), new TreeNode(23)),
  new TreeNode(31, new TreeNode(32), new TreeNode(33))
);

var levelOrder = function (root) {
  if (!root) return [];
  let queue = [[root, 0]];
  let result = [];
  while (queue.length) {
    let [node, leva] = queue.shift();
    let { val, left, right } = node;
    if (!result[leva]) {
      result[leva] = [];
    }

    result[leva].push(val);
    leva++;
    left && queue.push([left, leva]);
    right && queue.push([right, leva]);
  }
  return result;
};
console.log(levelOrder(root1));
// @lc code=end
