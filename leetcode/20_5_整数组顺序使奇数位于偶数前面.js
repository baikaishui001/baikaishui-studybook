/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
  let l = 0,
    r = nums.length - 1,
    temp;
  while (l < r) {
    if (nums[l] % 2 === 1) {
      l++;
      continue;
    }
    if (nums[r] % 2 === 0) {
      r--;
      continue;
    }
    temp=nums[l]
    nums[l]=nums[r]
    nums[r]=temp
    l++
    r--
  }
  return nums
};
console.log(exchange([1, 2, 3, 4]));
