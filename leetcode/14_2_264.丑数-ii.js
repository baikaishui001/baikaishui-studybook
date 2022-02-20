/*
 * @lc app=leetcode.cn id=264 lang=javascript
 *
 * [264] 丑数 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  let list = [1];
  let p2Idx = 0,
    p3Idx = 0,
    p5Idx = 0;
  for (let index = 1; index < n; index++) {
    let result = Math.min(
      list[p2Idx] * 2,
      Math.min(list[p3Idx] * 3, list[p5Idx] * 5)
    );
    list[index] = result;
    if (result === list[p2Idx] * 2) p2Idx++;
    if (result === list[p3Idx] * 3) p3Idx++;
    if (result === list[p5Idx] * 5) p5Idx++;
  }

  return list[n - 1];
};
// @lc code=end
