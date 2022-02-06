/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层序遍历 II
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
  new TreeNode(21, new TreeNode(22), new TreeNode(23)),
  new TreeNode(31, new TreeNode(32), new TreeNode(33))
);

var levelOrderBottom = function (root) {
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
  result.reverse();
  return result;
};

var levelOrderBottom1 = function (root) {
  if (!root) {
    return [];
  }
  let result = [[]];
  let parentQueue=[root]
  let childQueue=[]
  while(parentQueue.length||childQueue.length){
      while(parentQueue.length){
        const {val,left,right}=parentQueue.shift()
        result[0].push(val)
        left&&childQueue.push(left)
        right&&childQueue.push(right)
        if(!parentQueue.length&&childQueue.length){
            result.unshift([])
            continue
        }
      }
      
      parentQueue=childQueue
      childQueue=[]
  }
  return result;
};

// @lc code=end
