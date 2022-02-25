/*
 * @lc app=leetcode.cn id=451 lang=javascript
 *
 * [451] 根据字符出现频率排序
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let map=new Map(),str=""
    for (const str of s) {
        map.set(str,(map.get(str)||0)+1)
    }
   let arr=[...map].sort((a,b)=>b[1]-a[1]);
   arr.forEach(([v,k])=> {
       for (let index = 0; index < k; index++) {
        str+=v
           
       }
    });
    return str
};

console.log(frequencySort("Aabb"))
// @lc code=end

