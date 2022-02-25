/*
 * @lc app=leetcode.cn id=235 lang=javascript
 *
 * [235] 二叉搜索树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
  var root1 = new TreeNode(
    6,
    new TreeNode(2),
    new TreeNode(8)
   
    
  );
var lowestCommonAncestor = function(root, p, q) {
    console.log(111)
    if(p.val<root.val&&q.val<root.val){
        return lowestCommonAncestor(root.left,p,q)
    }else if(p.val>root.val&&q.val>root.val){
        return lowestCommonAncestor(root.right,p,q)
    }else{
        return root
    }
};
console.log(lowestCommonAncestor(root1,new TreeNode(2),new TreeNode(8)))
// @lc code=end

1