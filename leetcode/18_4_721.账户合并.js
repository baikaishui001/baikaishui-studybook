/*
 * @lc app=leetcode.cn id=721 lang=javascript
 *
 * [721] 账户合并
 */

// @lc code=start
/**
 * @param {string[][]} accounts
 * @return {string[][]}
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
var accountsMerge = function (accounts) {
  let obj = {};
  let len = accounts.length;
  let uf = new UnionFind(len);
  for (let i = 0; i < len; i++) {
    const emails = accounts[i];
  
    for (let j = 1; j < emails.length; j++) {
      if (obj[emails[j]]===undefined) {
        obj[emails[j]] = i;
      } else {
        uf.unite(obj[emails[j]], i);
      }
    }
  }
  const result=[]
  for (let i = 0; i <len; i++) {
      const Idx=uf.findSet(i)
      if(!result[Idx]&&accounts[i]){
       
          const [name,...newEmial]=accounts[i]
          const emails=[...new Set([...newEmial])].sort()
          result[Idx]=[name,...emails]
      }else{
          const [name,...oldEmail]=result[Idx]
          const [,...newEmial]=accounts[i];
          const emails=[...new Set([...oldEmail,...newEmial])].sort()
          result[Idx]=[name,...emails]
      }
      
  }
  return result.filter(Boolean);
};
console.log(
  accountsMerge([
    ["John", "johnsmith@mail.com", "john00@mail.com"],
    ["John", "johnnybravo@mail.com"],
    ["John", "johnsmith@mail.com", "john_newyork@mail.com"],
    ["Mary", "mary@mail.com"],
  ])
);
// @lc code=end
