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

var root1=new TreeNode(
    1,
    new TreeNode(
        2,
        new TreeNode(
            1,
           
        ),
        // new TreeNode(
        //     2,
           
        // ) 
    ),
    new TreeNode(
        3
    )
)
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
 var isEqual = function(A, B) {
    if(B==null)return true
    if(A==null)return false
    if(A.val!==B.val)return false
    return isEqual(A.left,B.left)&&isEqual(A.right,B.right)

   
};
var isSubStructure = function(A, B) {
    if(A==null||B==null){
        return false
    }
    if(A.val==B.val&&isEqual(A,B))return true
    return isSubStructure(A.left,B)||isSubStructure(A.right,B)
};