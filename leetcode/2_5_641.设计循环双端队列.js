/*
 * @lc app=leetcode.cn id=641 lang=javascript
 *
 * [641] 设计循环双端队列
 */

// @lc code=start
/**
 * @param {number} k
 */
var MyCircularDeque = function(k) {
    this.list=[]
    this.Listlen=k
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function(value) {
    if(this.isFull())return false
    this.list.unshift(value)
    return true
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function(value) {
    if(this.isFull())return false
    this.list.push(value)
    return true
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function() {
    if(this.isEmpty())return false
    this.list.shift()
    return true
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function() {
    if(this.isEmpty())return false
    this.list.pop()
    return true
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function() {
    if(this.isEmpty()) return -1;
    return this.list[0]
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function() {
    if(this.isEmpty()) return -1;
    return this.list[this.list.length-1]
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function() {
    return this.list.length === 0
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function() {
    return !this.isEmpty() && this.list.length === this.Listlen
};

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */
// @lc code=end

var MyCircularDeque = function(k) {
    this.size = k;
    this.count = 0;
    this.front =0 ;
    this.back = 0 ;
    this.queue =  new Array(k).fill(null)
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function(value) {
    if(this.isFull())return false;
    /* 循环取余 -1 就是 + n-1 避免出现负数*/
    let front = (this.front + this.size - 1) % this.size ;
    this.queue[front] = value
    this.front = front
    this.count++
    return true
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function(value) {
    if(this.isFull())return false;
    /* 循环取余 */
    let back = (this.back +  1) % this.size ;
    this.queue[this.back] = value
    this.back = back
    console.log(this.queue , back)

    this.count++
    return true

};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function() {
    if(this.isEmpty())return false;
    /* 循环取余 */
    // this.queue[this.front] = null
    let front = (this.front + 1) % this.size ;
    this.front = front
    this.count--
    return true

};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function() {
    if(this.isEmpty())return false;
    // this.queue[this.back] = null
    /* 循环取余 */
    let back = (this.back + this.size -  1) % this.size ;
    this.back = back
    console.log(this.queue , back)
    this.count--
    return true

};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function() {
    if(this.isEmpty()) return -1
    return this.queue[this.front]
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function() {
    if(this.isEmpty()) return -1
    /* 此时记录的是队尾的下一位 防止下标溢出 取余 */
    return this.queue[(this.back +this.size-1) % this.size]

};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function() {
return this.count === 0
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function() {
return this.count === this.size ;

};

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */
