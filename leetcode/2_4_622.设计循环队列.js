/*
 * @lc app=leetcode.cn id=622 lang=javascript
 *
 * [622] 设计循环队列
 */

// @lc code=start
/**
 * @param {number} k
 */
var MyCircularQueue = function (k) {
  this.cap = k;
  this.head = -1;
  this.tail = -1;
  this.queue = [];
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
    if(this.isFull())return false
    if(this.head===-1){
        this.head=0
    }
    this.tail=(this.tail+1)%this.cap
    this.queue[this.tail]=value
    return true
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
    if(this.isEmpty())return false
    this.queue[this.head]=null
    if(this.head==this.tail){
        this.tail=this.head=-1
    }else{
       this.head=(this.head+1)%this.cap
    }
    return true
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
return this.isEmpty()?-1:this.queue[this.head]
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
    return this.isEmpty()?-1:this.queue[this.tail]
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
  return this.head === -1;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
    return !this.isEmpty() && this.head === (this.tail + 1 ) % this.cap
    // return !this.isEmpty() && this.head === (this.tail + 1) % this.cap;
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
