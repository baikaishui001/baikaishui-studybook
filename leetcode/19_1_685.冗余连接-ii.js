/*
 * @lc app=leetcode.cn id=685 lang=javascript
 *
 * [685] 冗余连接 II
 */

// @lc code=start
/**
 * @param {number[][]} edges
 * @return {number[]}
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
var findRedundantDirectedConnection = function(edges) {
    const len=edges.length
    const uf=new UnionFind(len+1)
    const parent = [];
    let conflict=-1,cycle=-1;
    for(let i = 1;i<=(len +1);i++){
        parent[i] = i; //做一个初始化 
    }
    for ( i in edges) {
        let edge = edges[i]
        let node1 = edge[0],node2 = edge[1];
       if(parent[node2]!=node2){
        conflict=i
       }else{
           parent[node2]=node1
           if(uf.findSet(node1)==uf.findSet(node2)){
            cycle=i
           }else{
               uf.unite(node1,node2)
           }
       }
    }
    if(conflict<0){
        return edges[cycle]
    }else{
        const  conflictNode=edges[conflict]
        if(cycle >= 0){
            return [parent[conflictNode[1]],conflictNode[1]]
        }else {
            return conflictNode
        }
    }

};
console.log(findRedundantDirectedConnection([[2,1],[3,1],[4,2],[1,4]]))
// @lc code=end

