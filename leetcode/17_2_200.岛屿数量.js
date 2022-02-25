/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
 const grid1 = [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
 ];
let count
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
      count--;
      this.parent[root2] = root1;
      this.rank[root1] += this.rank[root2];
      this.setCount--;
    }
  }
  getCount() {
    return this.setCount;
  }
}

var numIslands = function (grid) {
  let m = grid.length;
  n= grid[0].length;
  count=0
  let uf = new UnionFind(m*n);
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === "1") {
        count++;
        if (i - 1 >= 0 && grid[i - 1][j] === "1") {
            uf.unite(i * n + j, (i - 1) * n + j);
          }
          if (j - 1 >= 0 && grid[i][j - 1] === "1") {
            uf.unite(i * n + j, i * n + j - 1);
          }
      }
     
    }
  }

 return count
};
console.log(numIslands(grid1));
// @lc code=end
