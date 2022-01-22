/*
 * @lc app=leetcode.cn id=227 lang=javascript
 *
 * [227] 基本计算器 II
 */

// @lc code=start
/**
 * @param {string} 
 * @return {number}
 */
const level={
    "@":0,
    "+":1,
    "-":1,
    "*":2,
    "/":2
}
const calc=(num1,oper,num2)=>{
    switch(oper){
        case "+":
            return Math.floor(num1+num2)
        case "-":
            return Math.floor(num1-num2)
        case "*":
            return Math.floor(num1*num2)
        case "/":
            return Math.floor(num1/num2)
    }
    return 0
}
var calculate = function(s) {
    let num=[],oper=[];
    s+="@"
    for(let i=0,count=""; i<s.length ; i++){
        let curItem=s[i]
        if(level[curItem] === undefined){
            count+=curItem
            continue;
        }
        num.push(Math.floor(count))
        count="";
        while(oper.length!==0&& level[curItem] <= level[oper[oper.length-1]] ){
            let b=num.pop();
            let a=num.pop();
            num.push(calc(a,oper[oper.length-1],b))
            oper.pop()
        }
        oper.push(curItem)
    }
    return num[0]
};
console.log(calculate("3+2*2"))
// @lc code=end

