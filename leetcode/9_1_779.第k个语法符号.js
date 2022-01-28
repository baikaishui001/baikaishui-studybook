/*
 * @lc app=leetcode.cn id=779 lang=javascript
 *
 * [779] 第K个语法符号
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthGrammar = function(n, k) {
    if(n===1){return 0}
    let nLen=Math.pow(2,n-1)
    if(k>nLen/2){
        let res=kthGrammar(n-1,k-nLen/2)
        res=res===0?1:0
        return 
    }else{
        return kthGrammar(n-1,k)
    }
};
console.log(kthGrammar(4,6))
// @lc code=end