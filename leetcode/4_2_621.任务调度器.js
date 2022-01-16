/*
 * @lc app=leetcode.cn id=621 lang=javascript
 *
 * [621] 任务调度器
 */

// @lc code=start
/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    if(n===0)return tasks.length;
    let obj={};
    tasks.forEach(Element=>{
        obj[Element]=obj[Element]?obj[Element]+1:1
    })
    let max=Math.max(...Object.values(obj))
    let maxcount=0;
    for (const key in obj) {
        if(obj[key]===max){
            maxcount++
        }
    }
    return Math.max((max-1)*(n+1)+maxcount,tasks.length)
};
var list=["A","A","A","B","B","B"];
console.log(leastInterval(list,2))

// @lc code=end

