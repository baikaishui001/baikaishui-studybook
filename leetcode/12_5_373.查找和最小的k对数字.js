/*
 * @lc app=leetcode.cn id=373 lang=javascript
 *
 * [373] 查找和最小的K对数字
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */


var kSmallestPairs = function (nums1, nums2, k) {
  let heap = new BigHeap(k);
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      const item = [nums1[i], nums2[j]];
      if (heap.size < k || compare(heap.top(), item)) {
        heap.push(item);
      } else {
        break;
      }
    }
  }
  return heap.arr;
};
function compare(arr1, arr2) {
  return arr1[0] + arr1[1] > arr2[0] + arr2[1];
}
class BigHeap {
  constructor(k) {
    this.arr = [];
    this.max = k;
    this.size = 0;
  }
  top() {
    return this.arr[0];
  }
  push(val) {
    this.arr.push(val);
    this.size++;
    if (this.size > 1) {
      let cur = this.size - 1,
      pre = (cur - 1) >> 1;
      while (cur > 0 && compare(this.arr[cur], this.arr[pre])) {
        [this.arr[cur], this.arr[pre]] = [this.arr[pre], this.arr[cur]];
        cur = pre;
        pre = (cur - 1) >> 1;
      }
    }
    if (this.size > this.max) this.pop();
  }
  pop() {
    this.arr[0] = this.arr.pop();
    this.size--;
    let cur = 0,
      left = cur * 2 + 1,
      right = cur * 2 + 2;
    while (
      (left < this.size && compare(this.arr[left], this.arr[cur])) ||
      (right < this.size && compare(this.arr[right], this.arr[cur]))
    ) {
      if (right < this.size && compare(this.arr[right], this.arr[left])) {
        [this.arr[cur], this.arr[right]] = [this.arr[right], this.arr[cur]];
        cur = right;
      } else {
        [this.arr[cur], this.arr[left]] = [this.arr[left], this.arr[cur]];
        cur = left;
      }
      (left = cur * 2 + 1), (right = cur * 2 + 2);
    }
  }
}


let nums3 = [-10, -4, 0, 0, 6],
  nums4 = [3, 5, 6, 7, 8, 100],
  k2 = 10;
console.log(kSmallestPairs(nums3, nums4, k2));




// @lc code=end
