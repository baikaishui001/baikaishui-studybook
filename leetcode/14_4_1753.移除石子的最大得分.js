/*
 * @lc app=leetcode.cn id=1753 lang=javascript
 *
 * [1753] 移除石子的最大得分
 */

// @lc code=start
/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var maximumScore = function (a, b, c) {
  if (a > b) [a, b] = [b, a];
  if (a > c) [a, c] = [c, a];
  if (b > c) [b, c] = [c, b];
  let result = Math.min(c - b, a);
  a -= result;
  c -= result;
  if (a != 0) {
    if (a % 2 === 1) {
      a -= 1;
    }
    b -= (a / 2) | 0;
    result += a;
  }
  result += b;
  return result;
};
// @lc code=end
