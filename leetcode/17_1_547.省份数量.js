/*
 * @lc app=leetcode.cn id=547 lang=javascript
 *
 * [547] 省份数量
 */

// @lc code=start
/**
 * @param {number[][]} isConnected
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
  unite(index1,index2){
    let root1=this.findSet(index1),
        root2=this.findSet(index2);
    if(root1!==root2){
        if(this.rank[root1]<this.rank[root2]) {
        [root1,root2]= [root2,root1]
       }
       this.parent[root2]=root1
       this.rank[root1]+=this.rank[root2]
       this.setCount--
    }
  }
  getCount(){
      return this.setCount
  }
}
var findCircleNum = function (isConnected) {
  let circleNum = isConnected.length;
  const uf = new UnionFind(circleNum);
  for (let index1 = 0; index1 < circleNum; index1++) {
     for (let index2 = index1+1; index2 < circleNum; index2++) {
         if(isConnected[index1][index2]==1){
            uf.unite(index1,index2)
         }
     }
  }
  return uf.getCount()
};

console.log(
  findCircleNum([
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ])
);
// @lc code=end
