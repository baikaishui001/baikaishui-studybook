/*
 * @lc app=leetcode.cn id=860 lang=javascript
 *
 * [860] 柠檬水找零
 */

// @lc code=start
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  if (bills[0] > 5) return false;
  let five = 0,
    ten = 0;
  for (let i = 0; bills[i]; i++) {
    let cur = bills[i];
    if (cur === 5) {
      five++;
    } else if (cur === 10) {
      if (five > 0) {
        five--;
        ten++;
      } else {
        return false;
      }
    } else if (cur === 20) {
      if (ten > 0 && five > 0) {
        ten--;
        five--;
      } else if (five > 2) {
        five = five - 3;
      } else {
        return false;
      }
    }
  }
  return true;
};

// console.log(lemonadeChange([5,5,5,10,5,5,10,20,20,20]))
// console.log(lemonadeChange([5,5,5,5,20,20,5,5,20,5]))
console.log(lemonadeChange([5, 5, 10, 10, 5, 20, 5, 10, 5, 5]));
console.log(lemonadeChange([5, 5, 5, 20]));
// @lc code=end
