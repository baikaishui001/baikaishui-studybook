/*
 * @lc app=leetcode.cn id=844 lang=javascript
 *
 * [844] 比较含退格的字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let s1=[],t1=[]
    let len=Math.max(s.length,t.length)
    for (let i = 0; i < len; i++) {
        if(s[i]){
            if(s[i]==="#"){
                s1.pop()
            }else{
                s1.push(s[i]) 
            }
        }
        if(t[i]){
            if(t[i]==="#"){
                t1.pop()
            }else{
                t1.push(t[i]) 
            }
        }
    }
    return s1.join()===t1.join()
};


console.log(backspaceCompare("ab##","c#d#"))
// @lc code=end

