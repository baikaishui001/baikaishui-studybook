/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
 function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var root1=new TreeNode(3,
    new TreeNode(
        1,
        undefined,
        new TreeNode(2,
        undefined,
        new TreeNode(
            5,
           
        )
        ) 
    ),
    new TreeNode(
        4,
       
    )
)
var inorder=function(root,list){
    if(root==null)return 
    inorder(root.left,list)
    list.push(root.val)
     inorder(root.right,list)
}
var kthLargest = function(root, k) {
    var list=[]
    inorder(root,list)
    console.log(list)
    return list[list.length-k]
};
console.log(kthLargest(root1,1))