/*
 * @lc app=leetcode.cn id=636 lang=javascript
 *
 * [636] 函数的独占时间
 */

// @lc code=start
/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function(n, logs) {
    let result=Array(n).fill(0),stack=[],pre=0;
    logs.forEach(element => {
        const [id1,status,time1]=element.split(":");
        time=Number(time1),id=Number(id1)
        // console.log(time,status,id)
        if(stack.length>0){
            result[stack[stack.length-1]]+=time-pre+(status==='end')
        }
        pre=time+(status==='end')
        if(status==="start"){
            stack.push(id)
        }else{
            stack.pop()
        }
    });
    return result
};
console.log(exclusiveTime(2,["0:start:0","1:start:2","1:end:5","0:end:6"]))
// @lc code=end

