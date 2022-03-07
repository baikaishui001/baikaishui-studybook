/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let result=0,left=0,right=height.length-1
    while(left<right){
        result=Math.max(result,Math.min(height[left],height[right])*(right-left))
        if(height[left]<height[right]){
            left++
        }else{
            right--
        }
    }
    return result
};
console.log(maxArea([1,8,6,2,5,4,8,3,7]))
// @lc code=end

