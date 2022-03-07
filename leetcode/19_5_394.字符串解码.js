/*
 * @lc app=leetcode.cn id=394 lang=javascript
 *
 * [394] 字符串解码
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    const numStack=[], strStack=[];
    let result="",num=0;
    for (const chart of s) {
        if(!isNaN(chart)){
            num=num*10+Number(chart)
        }else if(chart==="["){
            numStack.push(num)
            strStack.push(result)
            result=""
            num=0
        }else if(chart==="]"){
            let repeatTimes=numStack.pop()
            result=strStack.pop()+result.repeat(repeatTimes)
        }else{
            result+=chart
        }
    }
    return result
};
console.log(decodeString("3[a2[c]]"))
// @lc code=end

