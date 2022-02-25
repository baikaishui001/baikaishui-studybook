/*
 * @lc app=leetcode.cn id=973 lang=javascript
 *
 * [973] 最接近原点的 K 个点
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
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
var kClosest = function (points, k) {
    const heap=new Heap(
       
        (a,b)=>{
            const aVla=a[0]*a[0]+a[1]*a[1]
            const bVla=b[0]*b[0]+b[1]*b[1]
            return aVla<bVla
        },
        k
    )
    points.forEach(element => {
        heap.push(element)
    });
    console.log(heap.list)
    return heap.list
};

console.log(
  kClosest(
    [[3,3],[5,-1],[-2,4]],
    // [3,1,6,2,5],
    2
  )
);
// @lc code=end
