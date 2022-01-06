/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
//  function getNext(n) {
//     let sum = 0;
//     while(n) {
//         sum += (n%10) * (n%10)
//         n = parseInt(n/10)
//     }
//     return sum;
// }
// var isHappy = function(n) {
//     if(n==1||getNext(n)==1)return true
//     let slow=n
//     let fast=n
//     do {
//          slow=getNext(n)
//          fast=getNext(slow)
//     } while (slow!=fast&&fast!=1);
//     return fast==1
// };
function getNext(num) {
  let sum = 0;
  while (num) {
    sum += (num % 10) * (num % 10);
    num = parseInt(num / 10);
  }
  return sum;
}
// var isHappy = function(n) {
//     if(n==1 || getNext(n)==1) return true
//     let slow = fast = n;
//     while(fast && getNext(fast) && fast != 1)  {
//         slow = getNext(slow)
//         fast = getNext(getNext(fast))
//         console.log(slow,fast)
//         if(slow == fast) {

//             return false
//         }
//     }
//     return true
// };
var isHappy = function (n) {
  if (n == 1 || getNext(n) == 1) return true;
  let next = n;
  let seter = new Set();
  while (next != 1 && !seter.has(next)) {
    seter.add(next);
    next = getNext(next);
  }
  return next === 1;
};
// @lc code=end
