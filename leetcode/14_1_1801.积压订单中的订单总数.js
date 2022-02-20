/*
 * @lc app=leetcode.cn id=1801 lang=javascript
 *
 * [1801] 采购订单中的订单总数
 */

// @lc code=start
/**
 * @param {number[][]} orders
 * @return {number}
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
var getNumberOfBacklogOrders = function (orders) {
  //采购订单 大顶堆
  const maxBuyHeap = new Heap((a, b) => a[0] < b[0]);
  //销售订单 小顶堆
  const minSellHeap = new Heap((a, b) => a[0] > b[0]);
  let result = 0;
  for (let i = 0; i < orders.length; i++) {
    //     价格    数量    类型
    let [price, amount, type] = orders[i];
    //采购订单处理
    if (type === 0) {
      //数量不为0 && 采购堆数量不为0 && 采购堆顶元素价格<=当前价格
      while (amount && minSellHeap.size() && minSellHeap.top()[0] <= price) {
        //采购价格最低的订单
        const sellTop = minSellHeap.pop();
        result -= sellTop[1];
        if (sellTop[1] > amount) {
          sellTop[1] -= amount;
          amount = 0;
          minSellHeap.push(sellTop);
          result += sellTop[1];
        } else {
          amount -= sellTop[1];
        }
      }
      if (amount) {
        maxBuyHeap.push([price, amount, type]);
        result += amount;
      }
    //销售订单处理
    } else {
      //数量不为0 && 采购堆数量不为0 && 采购堆顶元素价格<=当前价格
      while (amount && maxBuyHeap.size() && maxBuyHeap.top()[0] >= price) {
        //采购价格最低的订单
        const buyTop = maxBuyHeap.pop();
        result -= buyTop[1];
        if (buyTop[1] > amount) {
          buyTop[1] -= amount;
          amount = 0;
          maxBuyHeap.push(buyTop);
          result += buyTop[1];
        } else {
          amount -= buyTop[1];
        }
      }
      if (amount) {
        minSellHeap.push([price, amount, type]);
        result += amount;
      }
    }
  }
  return result%1000000007
};
console.log(getNumberOfBacklogOrders([[19,28,0],[9,4,1],[25,15,1]]))
// @lc code=end
