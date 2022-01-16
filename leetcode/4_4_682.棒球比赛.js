/*
 * @lc app=leetcode.cn id=682 lang=javascript
 *
 * [682] 棒球比赛
 */

// @lc code=start
/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
  let result = [];
  let total = 0;
  ops.forEach((el, key) => {
    let len = result.length-1;
    if (el === "+") {
      result.push(result[len] + result[len - 1]);
    } else if (el === "D") {
      result.push(result[len] * 2);
    } else if (el === "C") {
      result.pop();
    } else {
      result.push(parseInt(el));
    }
  });
  for (let i = 0; i < result.length; i++) {
    total = total + result[i];
  }
  return total;
};
let result = calPoints(["5","2","C","D","+"]);
console.log(result);
// @lc code=end
