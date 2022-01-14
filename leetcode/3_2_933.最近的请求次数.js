/*
 * @lc app=leetcode.cn id=933 lang=javascript
 *
 * [933] 最近的请求次数
 */

// @lc code=start
function Node(val,next){
    this.val = val != undefined ? val : null;
    this.next = next != undefined ? next : null;
  
}
class RecentCounter {
  constructor() {
    this.list = new Node(-1);
    this.endNode=this.list
    this.size=0
    
  }
  /**
   * @param {number} t
   * @return {number}
   */
  ping(t) {
    this.endNode.next=new Node(t);
    this.endNode=this.endNode.next
    this.size++;
    
    let cur=this.list.next
    let min=t-3000
    while(cur&&cur.val<min){
        this.size--
        cur=cur.next
    }
    this.list.next=cur
    console.log(this.size)
    return this.size
    
  }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
// @lc code=end
recentCounter = new RecentCounter();
recentCounter.ping(1);     // requests = [1]，范围是 [-2999,1]，返回 1
recentCounter.ping(100);   // requests = [1, 100]，范围是 [-2900,100]，返回 2
recentCounter.ping(3001);  // requests = [1, 100, 3001]，范围是 [1,3001]，返回 3
recentCounter.ping(3002);
