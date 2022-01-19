/*
 * @lc app=leetcode.cn id=1249 lang=javascript
 *
 * [1249] 移除无效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    let stack=[],sa=s.split("");
    for(let i= 0; i<sa.length;i++){
        let item=sa[i]
        if(item==="("){
            stack.push(i)
        }else if(item===")"){
            if(stack.length>0&&sa[stack[stack.length-1]]==="("){
                stack.pop()
            }else{
                stack.push(i)
            }
        }
    }
    for (const key in stack) {
        sa[stack[key]]=""
    }
    return sa.join("")
};
console.log(minRemoveToMakeValid("lee(t(c)o)de)"))

// @lc code=end

