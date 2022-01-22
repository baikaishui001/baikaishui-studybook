/*
 * @lc app=leetcode.cn id=331 lang=javascript
 *
 * [331] 验证二叉树的前序序列化
 */

// @lc code=start
/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function (preorder) {
  let list = preorder.split(",");
  let list2 = [];
  for (let i = 0; i < list.length; i++) {
    list2.push(list[i]);
    let len = list2.length - 1;
    while (
      list2.length > 2 &&
      list2[len] === "#" &&
      list2[len - 1] === "#" &&
      list2[len - 2] !== "#"
    ) {
      list2[len - 2] = "#";
      list2.pop();
      list2.pop();
      len -= 2;
    }
  }
  return list2.length === 1 && list2[0] === "#";
};

console.log(isValidSerialization("9,3,4,#,#,1,#,#,2,#,6,#,#"));
// @lc code=end
