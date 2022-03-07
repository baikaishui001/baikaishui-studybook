/*
 * @lc app=leetcode.cn id=765 lang=javascript
 *
 * [765] 情侣牵手
 */

// @lc code=start
/**
 * @param {number[]} row
 * @return {number}
 */
class UnionFind {
  constructor(length) {
    this.parent = new Array(length).fill(0).map((v, j) => j);
    this.rank = new Array(length).fill(1);
    this.setCount = length;
  }
  findSet(index) {
    if (this.parent[index] !== index) {
      this.parent[index] = this.findSet(this.parent[index]);
    }
    return this.parent[index];
  }
  unite(indei, index2) {
    let root1 = this.findSet(indei),
      root2 = this.findSet(index2);
    if (root1 !== root2) {
      if (this.rank[root1] < this.rank[root2]) {
        [root1, root2] = [root2, root1];
      }
      this.parent[root2] = root1;
      this.rank[root1] += this.rank[root2];
      this.setCount--;
    }
  }
  getCount() {
    return this.setCount;
  }
}
var minSwapsCouples = function (row) {
    const len=row.length
    const N=len>>1
    const uf=new UnionFind(N)
    for (let i = 0; i < len; i+=2) {
        let cur=row[i],nextId=row[i+1]>>1;
        //根据id>>1相等即为情侣的情况，将cur与next不相等的标记
        if(cur!==nextId){
            uf.unite(row[i]>>1,row[i+1]>>1)
        }
    }
    return N - uf.getCount()

};
console.log(minSwapsCouples([5,3,4,2,1,0]))
// @lc code=end
