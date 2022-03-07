/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const log = console.log;
var maxSlidingWindow1 = function (nums, k) {
  const len = nums.length;
  let pointer = [];
  for (let i = 0; i < k; i++) {
    while (pointer.length && nums[i] >= nums[pointer[pointer.length - 1]]) {
      pointer.pop();
    }
    pointer.push(i);
  }
  const ans = [nums[pointer[0]]];
  for (let i = k; i < len; i++) {
    while (pointer.length && nums[i] >= nums[pointer[pointer.length - 1]]) {
      pointer.pop();
    }
    pointer.push(i);
    while (pointer[0] <= i - k) {
      pointer.shift();
    }
    ans.push(nums[pointer[0]]);
  }
  return ans;
};
console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
// @lc code=end
