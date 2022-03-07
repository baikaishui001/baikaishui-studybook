/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */

class Heap {
  constructor(max,cmp) {
    const defaultCmp = (a, b) => a < b;
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
var smallestK = function(arr, k) {
  const heap=new Heap(k)
  for (const item of arr) {
    heap.push(item)
  }

  const  result=[]
  while(heap.size()){
    const item=heap.pop()
    result.unshift(item)
  }
  return result
};
console.log(smallestK([1,3,5,7,2,4,6,8], 4));
// quickSort([6,8,9,3,2,1,4,5,7])
