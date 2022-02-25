/*
 * @lc app=leetcode.cn id=1319 lang=javascript
 *
 * [1319] 连通网络的操作次数
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */

 class UnionFind {
    constructor(length) {
      this.parent = new Array(length).fill(0).map((v, index) => index);
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
var makeConnected = function(n, connections) {
    if(connections.length<n-1){
        return -1
    }
    const uf=new UnionFind(n)
    for (const iterator of connections) {
        uf.unite(iterator[0],iterator[1])
    }
    return uf.getCount()
};
// @lc code=end

