/*
 * @lc app=leetcode.cn id=947 lang=javascript
 *
 * [947] 移除最多的同行或同列石头
 */

// @lc code=start
/**
 * @param {number[][]} stones
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
var removeStones = function(stones) {
    const len=stones.length;
    const uf = new UnionFind(len)
    for (let i = 0; i < len; i++) {
        const [x1,y1] = stones[i];
        for (let j = i+1; j < len; j++) {
            const  [x2,y2]= stones[j];
            if(x1==x2||y1==y2){
                uf.unite(i,j)
            }            
        }
    }
    return len-uf.getCount()
};
console.log(removeStones([[0,0],[0,2],[1,1],[2,0],[2,2]]))
// @lc code=end

