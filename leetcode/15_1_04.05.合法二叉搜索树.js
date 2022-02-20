/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
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
  10,
  new TreeNode(5)  ,
  new TreeNode(15, new TreeNode(11), new TreeNode(20))
 
  
);
function isValidBST1(root, lower = -Infinity, upper = Infinity) {
    if (!root) return true
    
    return root.val > lower &&
        root.val < upper &&
        isValidBST(root.left, lower, root.val) &&
        isValidBST(root.right, root.val, upper)
}
function isValidBST(root) {
    let pre=-Infinity
    let stack=[]
    while(stack.length>0||root){
        while(root){
            stack.push(root)
            root=root.left
        }
        root=stack.pop()
        if(root.val<=pre)return false
        pre=root.val
        root=root.right
    }
    return true
}





  console.log(isValidBST(root1))
// @lc code=end
