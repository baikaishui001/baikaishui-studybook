/*
 * @lc app=leetcode.cn id=703 lang=javascript
 *
 * [703] 数据流中的第 K 大元素
 */

// @lc code=start
class MinHeap {
  constructor(max) {
    this.arr = [];
    this.size = 0;
    this.max = max;
  }
  push(val) {
    if (this.size >= this.max && val < this.top()) return;
    this.arr.push(val);
    this.size++;
    if (this.size > 1) {
      let cur = this.size - 1;
      let parent = (cur - 1) >> 1;
      while (cur > 0 && this.arr[parent] > this.arr[cur]) {
        [this.arr[parent], this.arr[cur]] = [this.arr[cur], this.arr[parent]];
        cur = parent;
        parent = (cur - 1) >> 1;
      }
    }
    while (this.size > this.max) this.pop();
  }
  pop() {
    if (this.empty()) return;
    this.arr[0] = this.arr.pop();
    this.size--;
    let cur = 0,
      childl = cur * 2 + 1,
      childr = cur * 2 + 2;
    while (
      (childl < this.size && this.arr[childl] < this.arr[cur]) ||
      (childr < this.size && this.arr[childr] < this.arr[cur])
    ) {
      if (childr < this.size && this.arr[childr] < this.arr[childl]) {
        [this.arr[cur], this.arr[childr]] = [this.arr[childr], this.arr[cur]];
        cur = childr;
      } else {
        [this.arr[cur], this.arr[childl]] = [this.arr[childl], this.arr[cur]];
        cur = childl;
      }
      childl = cur * 2 + 1;
      childr = cur * 2 + 2;
    }
  }
  top() {
    return this.arr[0];
  }
  empty() {
    return this.size === 0;
  }
}


/**
 * @param {number} k
 * @param {number[]} nums
 */
 var KthLargest = function (k, nums) {
  this.heap = new MinHeap(k);
  for (let i = 0; i < nums.length; i++) {
    this.heap.push(nums[i]);
  }
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  this.heap.push(val);
  return this.heap.top();
};
/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
// @lc code=end
