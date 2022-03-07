/*
 * @lc app=leetcode.cn id=1202 lang=javascript
 *
 * [1202] 交换字符串中的元素
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */
class UnionFind {
  constructor(length) {
    this.parent = new Array(length).fill(0).map((v, j) => j);
    console.log(this.parent);
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
var smallestStringWithSwaps = function (s, pairs) {
  const len = s.length;
  let uf = new UnionFind(len);
  for (const iterator of pairs) {
    const [key1, key2] = iterator;
    if (uf.findSet(key1) !== uf.findSet(key2)) {
      uf.unite(key1, key2);
    }
  }
  const fa = uf.parent;

  let vec = new Array(len).fill(0).map(() => new Array());
  for (let i = 0; i < len; i++) {
    fa[i] = uf.findSet(i);
    vec[fa[i]].push(s[i]);
  }
  vec = vec.map((v) => {
    if (v.length > 0) {
      return v.sort((a, b) => a.charCodeAt() - b.charCodeAt());
    }
    return v;
  });
  let p = new Array(len).fill(0);
  let ans = new Array(len).fill("1");
  for (let i = 0; i < len; i++) {
    ans[i]=vec[fa[i]][p[fa[i]]]
    p[fa[i]]++
  }
  return ans.join("")
};
console.log(
  smallestStringWithSwaps("dcab", [
    [0, 3],
    [1, 2],
  ])
);
// @lc code=end
