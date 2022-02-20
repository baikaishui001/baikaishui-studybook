/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// var findKthLargest = function (nums, k) {};
var findKthLargest = function (nums, k) {
  const heap = new Heap(k);
  while (nums.length) {
    const item = nums.pop();
    heap.push(item);
  }
  return heap.arr[0];
};

class Heap {
  constructor(k) {
    this.arr = [];
    this.k = k;
  }
  size() {
    return this.arr.length;
  }
  push(val) {
    if (this.size() < this.k) {
      this.arr.push(val);
      this._sortBack();
    } else if (val > this.arr[0]) {
      this.arr[0] = val;
      this._sortFront();
    }
  }
  pop() {
    const val = this.arr[0];
    const back = this.arr.pop();
    if (this.arr.length) {
      this.arr[0] = back;

      this._sortFront();
    }
    return val;
  }
  _sortBack() {
    let i = this.arr.length - 1;
    while (i > 0 && this.arr[i] < this.arr[Math.floor((i - 1) / 2)]) {
      [this.arr[i], this.arr[Math.floor((i - 1) / 2)]] = [
        this.arr[Math.floor((i - 1) / 2)],
        this.arr[i],
      ];
      i = Math.floor((i - 1) / 2);
    }
  }

  _sortFront() {
    let i = 0;
    while (i * 2 + 1 < this.size()) {
      let temp = i;
      if (this.arr[temp] > this.arr[i * 2 + 1]) temp = i * 2 + 1;
      if (i * 2 + 2 < this.size() && this.arr[temp] > this.arr[i * 2 + 2])
        temp = i * 2 + 2;
      if (temp === i) break;
      [this.arr[i], this.arr[temp]] = [this.arr[temp], this.arr[i]];
      i = temp;
    }
  }
}
var quick_sort = function (arr, l, r) {
  if (l >= r) return;
  let l1 = l;
  r1 = r;
  while (l1 < r1) {
    while (l1 < r1 && arr[r1] >= arr[l]) {
      r1--;
    }
    while (l1 < r1 && arr[l1] <= arr[l]) {
      l1++;
    }
    swap(arr, r1, l1);
  }
  swap(arr, r1, l);
  quick_sort(arr, l, r1 - 1);
  quick_sort(arr, r1 + 1, r);
};

var swap = function (arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
};
var findKthLargest1 = function (arr, k) {
  quick_sort(arr, 0, arr.length - 1);
 return arr[arr.length-k]
};
// @lc code=end
