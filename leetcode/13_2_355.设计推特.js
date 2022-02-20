/*
 * @lc app=leetcode.cn id=355 lang=javascript
 *
 * [355] 设计推特
 */

// @lc code=start

var Twitter = function () {
  this.id = 0;
  this.users = {};
};

/**
 * @param {number} userId
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function (userId, tweetId) {
  if (!this.users[userId]) {
    this.users[userId] = {
      list: [],
      follows: new Set(),
    };
  }
  this.users[userId].list.push({ id: this.id++, tweetId });
  if (this.users[userId].list.length > 10) {
    this.users[userId].list.shift();
  }
};

/**
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function (userId) {
  if (!this.users[userId]) return [];
  let arr = [...this.users[userId].list]
  this.users[userId].follows.forEach((followId) => {
    if (this.users[followId]) {
      arr.push(...this.users[followId].list);
    }
  });
  // 按照时间顺序从近到远排序
  arr.sort((a, b) => b.id - a.id);
  // 获取最近的十条推文的id
  const res = [];
  for (let i = 0; i < Math.min(arr.length, 10); i++) {
    res.push(arr[i].tweetId);
  }
  return res;
};

/**
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function (followerId, followeeId) {
  if (!this.users[followerId]) {
    this.users[followerId] = {
      list: [],
      follows: new Set(),
    };
  }
  this.users[followerId].follows.add(followeeId);
};

/**
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function (followerId, followeeId) {
  this.users[followerId].follows.delete(followeeId);
};

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */
// @lc code=end
class Heap{
  constructor(cmp){
    const defaultCmp=(a,b)=>a>b
    this.list=[]
    //默认大顶堆
    this.cmp=cmp||defaultCmp
  }
  size(){
    return this.list.length 
  }
  top(){
    return this.list.length===0?null:this.list[0]
  }
  push(val){
    this.list.push(val)
    this.bubbleUp(this.size()-1)
  }
  pop(){
    if(!this.size()){
      return null; 
    }else if(this.size()===1){
      return this.list.pop()
    }
    const top=this.list[0]
    this.list[0]=this.list.pop()
    this.bubbleDown(0)
    return top
  }
  //向上调整
  bubbleUp(idx){
    while(idx){
     let  parentIdx=Math.floor((idx-1)/2)
      if(this.cmp(this.list[idx],this.list[parentIdx])){
        this.swap(idx,parentIdx)
        idx=parentIdx
      }else{
        break
      }
    }
  }
  //向下调整
  bubbleDown(idx){
    const lastIdx=this.size()-1
    while(idx<lastIdx){
      let targetIdx=idx
      let leftIdx=targetIdx*2+1;
      let rightIdx=targetIdx*2+2
      if(leftIdx<=lastIdx&&this.cmp(this.list[leftIdx],this.list[targetIdx])){
        targetIdx=leftIdx
      }
      if(rightIdx<=lastIdx&&this.cmp(this.list[rightIdx],this.list[targetIdx])){
        targetIdx=rightIdx
      }
      if(targetIdx>idx){
        this.swap(targetIdx,idx)
        idx=targetIdx
      }else{
        break
      }
    }
  }
  // 交换
  swap(i,j){
    [this.list[i],this.list[j]]=[this.list[j],this.list[i]]
  }
}
heap=new Heap()
