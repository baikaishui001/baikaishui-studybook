/*
 * @lc app=leetcode.cn id=1046 lang=javascript
 *
 * [1046] 最后一块石头的重量
 */

// @lc code=start
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    stones.sort((a,b)=>a-b)
    for(;stones.length>1;){
        const a=stones.pop()
        const b=stones.pop()
        stones.push(Math.abs(a-b))
        stones.sort((a,b)=>a-b)
    }
    return stones
};
console.log(lastStoneWeight([2,7,4,1,8,1]))
// @lc code=end
