/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  const swap = (list, i, j) => {
    [list[i], list[j]] = [list[j], list[i]];
  };
  let red = 0,index=0
    blue = nums.length - 1;
  //   for (let index = 0; index < nums.length; index++) {
  while (index <=blue) {
    switch (nums[index]) {
      case 0:
        swap(nums, red++, index);
        index++;
        break;
      case 1:
        index++;
        break;

      case 2:
        swap(nums, blue--, index);
        break;
    }
  }
  console.log(nums);
};
console.log(sortColors([2, 0, 2, 1, 1, 0]));
// @lc code=end
