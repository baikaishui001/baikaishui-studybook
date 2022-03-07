/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let sets=new Set()
    nums.map(v=>sets.add(v))
    let max=0
    for (const item of nums) {
        if(!sets.has(item-1)){
            curentNun=item
            let count=1
            while(sets.has(curentNun+1)){
                curentNun++
                count++
            }
            max=Math.max(count,max)
        }
    }
    return max
};
console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]))
// @lc code=end

