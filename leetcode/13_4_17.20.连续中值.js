/**
 * initialize your data structure here.
 */

class Heap {
  constructor(cmp, max) {
    const defaultCmp = (a, b) => a > b;
    this.list = [];
    //默认大顶堆
    this.cmp = cmp || defaultCmp;
    this.max = max || null;
  }
  size() {
    return this.list.length;
  }
  top() {
    return this.list.length === 0 ? null : this.list[0];
  }
  push(val) {
    this.list.push(val);
    if (this.size() > 1) {
      this.bubbleUp(this.size() - 1);
    }
    if (this.max !== null && this.size() > this.max) this.pop();
  }
  pop() {
    if (!this.size()) {
      return null;
    } else if (this.size() === 1) {
      return this.list.pop();
    }
    const top = this.list[0];
    this.list[0] = this.list.pop();
    this.bubbleDown(0);
    return top;
  }
  //向上调整
  bubbleUp(idx) {
    while (idx) {
      let parentIdx = (idx - 1) >> 1;
      if (this.cmp(this.list[parentIdx], this.list[idx])) {
        this.swap(idx, parentIdx);
        idx = parentIdx;
      } else {
        break;
      }
    }
  }
  //向下调整
  bubbleDown() {
    let cur = 0,
      leftIdx = 1,
      rightIdx = 2,
      size = this.size();
    while (
      (leftIdx < size && this.cmp(this.list[cur], this.list[leftIdx])) ||
      (rightIdx < size && this.cmp(this.list[cur], this.list[rightIdx]))
    ) {
      if (
        rightIdx < size &&
        this.cmp(this.list[leftIdx], this.list[rightIdx])
      ) {
        this.swap(rightIdx, cur);
        cur = rightIdx;
      } else {
        this.swap(leftIdx, cur);
        cur = leftIdx;
      }
      (leftIdx = cur * 2 + 1), (rightIdx = cur * 2 + 2);
    }
  }
  // 交换
  swap(i, j) {
    [this.list[i], this.list[j]] = [this.list[j], this.list[i]];
  }
}
function comp(a, b) {
  return a < b;
}
var MedianFinder = function () {
  this.maxHeap = new Heap((a, b) => a < b);
  this.minHeap = new Heap((a, b) => a > b);
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  if (this.maxHeap.size() === 0 || num <= this.maxHeap.top()) {
    this.maxHeap.push(num);
    if (this.maxHeap.size() > this.minHeap.size() + 1) {
      this.minHeap.push(this.maxHeap.pop());
    }
  } else {
    this.minHeap.push(num);
    if (this.minHeap.size() > this.maxHeap.size()) {
      this.maxHeap.push(this.minHeap.pop());
    }
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  let len = this.maxHeap.size() + this.minHeap.size();
  if (len % 2 === 1) {
    return this.maxHeap.top();
  } else {
    return (this.minHeap.top() + this.maxHeap.top()) / 2;
  }
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
