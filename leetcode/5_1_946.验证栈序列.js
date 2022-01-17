/*
 * @lc app=leetcode.cn id=946 lang=javascript
 *
 * [946] 验证栈序列
 */

// @lc code=start
/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */

var validateStackSequences = function (pushed, popped) {
  let stac = [];
  let num = 0;
  for (let i = 0; i < pushed.length; i++) {
    stac.push(pushed[i]);
    while (stac.length && stac[stac.length - 1] == popped[num]) {
      stac.pop();
      num++;
    }
  }
  return !stac.length;
};
// @lc code=end
