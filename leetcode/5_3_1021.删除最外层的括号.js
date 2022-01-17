/*
 * @lc app=leetcode.cn id=1021 lang=javascript
 *
 * [1021] 删除最外层的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let str="";
    for (let i = 0,pre=0,count=0; i < s.length; i++) {
        const im = s[i];
        if(im==="("){
            count+=1
        }else{
            count-=1
        }
        if(count!=0)continue
        str+=s.substr(pre+1,i-pre-1)
        count=0
        pre=i+1
    }
    return str
};
console.log(removeOuterParentheses("(()())(())(()(()))"))
// @lc code=end

