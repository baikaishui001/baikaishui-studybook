/*
 * @lc app=leetcode.cn id=1670 lang=javascript
 *
 * [1670] 设计前中后队列
 */

// @lc code=start

var FrontMiddleBackQueue = function () {
  this.list = [];
};

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushFront = function (val) {
  this.list.unshift(val);
};

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushMiddle = function (val) {
  var mid = this.list.length >> 1;
  this.list.splice(mid, 0, val);
};

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushBack = function (val) {
  this.list.push(val);
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popFront = function () {
  if (this.isEmpty()) return -1;
  return this.list.shift();
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popMiddle = function () {
  if (this.isEmpty()) return -1;
  var mid = (this.list.length - 1) >> 1;
  let item = this.list.splice(mid, 1);
  return item[0];
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popBack = function () {
  if (this.isEmpty()) return -1;
  return this.list.pop();
};
FrontMiddleBackQueue.prototype.getMiddlekey = function () {
  return parseInt(this.list.length / 2);
};
FrontMiddleBackQueue.prototype.isEmpty = function () {
  return this.list.length === 0;
};

/**
 * Your FrontMiddleBackQueue object will be instantiated and called as such:
 * var obj = new FrontMiddleBackQueue()
 * obj.pushFront(val)
 * obj.pushMiddle(val)
 * obj.pushBack(val)
 * var param_4 = obj.popFront()
 * var param_5 = obj.popMiddle()
 * var param_6 = obj.popBack()
 */
// @lc code=end

function Node(val, next) {
  this.val = val != undefined ? val : null;
  this.next = next != undefined ? next : null;
}

class FrontMiddleBackQueue1 {
  constructor() {
    this.list = new Node(-1);
    this.size = 0;
  }
  toArray() {
    let array = [];
    let cur = this.list.next;
    while (cur) {
      array.push(cur.val);
      cur = cur.next;
    }
    console.log(array);
  }
  pushFront(val) {
    this.list.next = new Node(val, this.list.next);
    this.size++;
  }
  pushMiddle(val) {
    let midKey = this.size >> 1;
    let cur = this.list;
    while (midKey > 0) {
      midKey--;
      cur = cur.next;
    }
    this.size++;
    cur.next = new Node(val, cur.next);
  }
  pushBack(val) {
    this.getEndNode().next = new Node(val);
    this.size++;
  }
  popFront() {
    if (this.isEmpty()) return -1;
    let head = this.list;
    let val=head.next.val
    this.list.next = this.list.next.next;
    this.size--;
    return val;
  }
  popMiddle() {
    if(this.isEmpty())return -1
  
    let midKey=(this.size-1)>>1
   let cur=this.list
   while(midKey>0){
    cur=cur.next
    midKey--
   }
  
   let val=cur.next.val
   cur.next=cur.next.next
   this.size--
   return val

  }
  popBack() {
    if (this.isEmpty()) return -1;
    let cur = this.list;
    while (cur && cur.next && cur.next.next) {
      cur = cur.next;
    }
    let val = cur.next.val;
    cur.next = null;
    this.size--;
    return val;
  }
  isEmpty() {
    return this.size === 0;
  }
  getEndNode() {
    let cur = this.list;
    while (cur && cur.next) {
      cur = cur.next;
    }
    return cur;
  }
}
/**
 * Your FrontMiddleBackQueue object will be instantiated and called as such:
 * var obj = new FrontMiddleBackQueue()
 * obj.pushFront(val)
 * obj.pushMiddle(val)
 * obj.pushBack(val)
 * var param_4 = obj.popFront()
 * var param_5 = obj.popMiddle()
 * var param_6 = obj.popBack()
 */