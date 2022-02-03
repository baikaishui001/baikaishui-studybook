/*
 * @lc app=leetcode.cn id=968 lang=javascript
 *
 * [968] 监控二叉树
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
/**
 * @param {TreeNode} root
 * @return {number}
 */
/* 本来的想法是 从根节点开始 ， 根节点装了节点就不用装， 子节点装了父节点就不用装， 但是漏了一些情况
 还是得上动态规划啊。
 然后我们分三种方案
 对于一个子树， 
 1 父节点放监控
 2 父节点没放监控 当前节点放
 3 当前节点不放 
 这三种情况下 完全观察子树需要的监控 

 我们就取这三种情况下的最小值;
  */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
//   this.key = key;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
var root1 = new TreeNode(
  0,
  undefined,
  new TreeNode(
    0,
    undefined,
    new TreeNode(
        0,
        undefined,
        new TreeNode(0)
    )
  ),

);

var minCameraCover1 = function (root) {
    let res=0
    function preorder(node){
        if(node.left===null&&node.right===null){
            if(node.parent){
                node.parent.val=2
                node.val=1
            }else{
                node.val=2
                res++
            }

            return 
        }
        if(node.left){
            node.left.parent = node
            preorder(node.left)
        }
        if(node.right){
            node.right.parent = node
            preorder(node.right)
        }
        if(node.val==2){
            res++
            if(node.parent&&node.parent.val!==2)node.parent.val=1
        }else if(node.val==0){
            if(node.parent){
                node.parent.val=2
                node.val=1
            }else{
                node.val=2
                res++
            }
        }
    }
    preorder(root)
    return res
};
// 解题思路
// 第一步：确定节点3个状态，
// 0代表未被监视；
// 1代表被监视；
// 2代表已安装摄像头；
// 第二步：后序遍历；先处理2个子节点再处理父节点；
// 第三步：根据子节点的状态返回父节点的状态；
// 1.子节点有一个状态为0，则父节点返回 2 父节点需要一个摄像头 res++（根据贪心思想 由上面的节点监控下面的节点比较省摄像头）；
// 2.左右2个子节点状态都是1，则父节点返回0 （因为子节点都没有摄像头，所以父节点需要被他的父节点监控；所以他是未被监控0）；
// 3.子节点有一个状态是2，则父节点返回 1 （因为子节点有一个是有摄像头的所以 父节点是被监控了的）
// 最后。如果根节点的左右子节点都是1 则他是0 需要一个摄像头res++；

var minCameraCover3 = function(root) {
    let res=0;
    if (dfs(root) == 0) {
        res++;
    }

	// 根据子节点的状态返回父节点的状态；
	function dfs(node) {
		if (node == null) return 1;
		let left=dfs(node.left);
		let right=dfs(node.right);
        console.log(left,
            right)
		// 1.子节点有一个状态为0，则父节点返回 2 父节点需要一个摄像头 res++（根据贪心思想 由上面的节点监控下面的节点比较省摄像头）；
        if (left == 0 || right == 0) {
			res++;
            console.log("addx")
			return 2;
		}
		// 2.左右2个子节点状态都是1，则父节点返回0 （因为子节点都没有摄像头，所以父节点需要被他的父节点监控；所以他是未被监控0）；
        if(left==1&&right==1) return 0;
		// 3.子节点有一个状态是2，则父节点返回 1 （因为子节点有一个是有摄像头的所以 父节点是被监控了的）
		if(left == 2 || right == 2) return 1;
	}
    return res;
};

// @lc code=end
