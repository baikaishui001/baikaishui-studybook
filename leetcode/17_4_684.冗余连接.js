/*
 * @lc app=leetcode.cn id=684 lang=javascript
 *
 * [684] 冗余连接
 */

// @lc code=start
/**
 * @param {number[][]} edges
 * @return {number[]}
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

var findRedundantConnection = function (edges) {
  const uf = new UnionFind(edges.length);
  for (const iterator of edges) {
        const [node1,node2]=iterator
        if(uf.findSet(node1)!==uf.findSet(node2)){
            uf.unite(node1,node2)
        }else{
            return  iterator
        }
   
  }
  return [0]
};
console.log(
  findRedundantConnection([
    [1, 2],
    [1, 3],
    [2, 3],
  ])
);
// @lc code=end
