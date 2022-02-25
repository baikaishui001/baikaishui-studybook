/*
 * @lc app=leetcode.cn id=990 lang=javascript
 *
 * [990] 等式方程的可满足性
 */

// @lc code=start
/**
 * @param {string[]} equations
 * @return {boolean}
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

var equationsPossible = function (equations) {
  const uf = new UnionFind(26);
  for (const iterator of equations) {
    if (iterator[1] === "=") {
      uf.unite(iterator.charCodeAt(0) - 97, iterator.charCodeAt(3) - 97);
    }
  }
  for (const iterator of equations) {
    if (iterator[1] === "!") {
      if (
        uf.findSet(iterator.charCodeAt(0) - 97) ===
        uf.findSet(iterator.charCodeAt(3) - 97)
      ) {
        return false;
      }
    }
  }
  return true;
};
console.log(equationsPossible(["a==b", "b==c", "a==c"]));
// @lc code=end
