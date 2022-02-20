/*
 * @lc app=leetcode.cn id=692 lang=javascript
 *
 * [692] 前K个高频单词
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
 


class Heap {
  constructor(max,cmp) {
    const defaultCmp = (a, b) => a > b;
    this.list = [];
    //默认大顶堆
    this.cmp = cmp || defaultCmp;
    this.max=max||null
  }
  size() {
    return this.list.length;
  }
  top() {
    return this.list.length === 0 ? null : this.list[0];
  }
  push(val) {
    this.list.push(val);
    if(this.size()>1){
    this.bubbleUp(this.size() - 1);
    }
    if( this.max!==null&&this.size()> this.max)this.pop()
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
      let parentIdx = (idx-1)>>1;
      if (this.cmp(this.list[parentIdx],this.list[idx] )) {
        this.swap(idx, parentIdx);
        idx = parentIdx;
      } else {
        break;
      }
    }
  }
  //向下调整
  bubbleDown() {
    let cur = 0,leftIdx=1,rightIdx=2,size=this.size()
    while(
     ( leftIdx<size&&this.cmp(this.list[cur],this.list[leftIdx]))||
     ( rightIdx<size&&this.cmp(this.list[cur],this.list[rightIdx]))
    ){
      if(rightIdx<size&&this.cmp(this.list[leftIdx],this.list[rightIdx])){
        this.swap(rightIdx,cur)
        cur=rightIdx
       
      }else{
        this.swap(leftIdx,cur)
        cur=leftIdx
      }
      leftIdx=cur*2+1,rightIdx=cur*2+2
    }
  }
  // 交换
  swap(i, j) {
    [this.list[i], this.list[j]] = [this.list[j], this.list[i]];
  }
}
function com1(a,b){
  
  if(a.val===b.val) return a.name<b.name
  return a.val>b.val
}

var topKFrequent = function (words, k) {
  let maps=new Map();
  words.forEach(item => {
    if(maps.has(item)){
      maps.set(item,maps.get(item)+1)
    }else{
      maps.set(item,1)
    }
  });
  // console.log(maps)
 
  let heap=new Heap(k,com1)
  maps.forEach((val,name)=>{
   const item={val,name}
   console.log(val)
    if(heap.size()<k||com1(item,heap.top())){
      heap.push(item)
    }
  })
  let res=[]
  while(heap.size()){
    res.unshift(heap.pop().name)
  }
 
  return res
};

// @lc code=end
