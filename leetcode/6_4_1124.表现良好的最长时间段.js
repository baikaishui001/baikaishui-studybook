/*
 * @lc app=leetcode.cn id=1124 lang=javascript
 *
 * [1124] 表现良好的最长时间段
 */

// @lc code=start
/**
 * @param {number[]} hours
 * @return {number}
 */
var longestWPI = function (hours) {
    let total = 0,result = 0;
    let hashStore = new Map();
    for (let i = 0; i < hours.length; i++) {
        if (hours[i] > 8) {
            total++;
        } else {
            total--;
        }
        if (total > 0) {
            result = i + 1;
        } else {
            if (!hashStore.has(total)) {
                hashStore.set(total, i); 
            }
            if (hashStore.has(total - 1)) { 
                result = Math.max(result, i - hashStore.get(total - 1));
            }
        }
    }
    return result;
};
console.log(longestWPI([6,6,9,9]))
// @lc code=end

