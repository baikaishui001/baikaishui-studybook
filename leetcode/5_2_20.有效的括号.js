/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let map = {')':'(','}':'{',']':'['};
    let stack=[];
    for (let i = 0 ; i < s.length; i++) {
        let item=s[i];
        if(item==="("||item==="{"||item==="["){
            stack.push(item)
        }else if(map[item]&&stack[stack.length-1]===map[item]){
            stack.pop()
        }else{
            return false
        }
        
    }
    return stack.length===0
};
// @lc code=end

