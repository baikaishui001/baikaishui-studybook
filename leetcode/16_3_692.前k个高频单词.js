/*
 * @lc app=leetcode.cn id=692 lang=javascript
 *
 * [692] 前K个高频单词
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
  let obj = {},
    list = [...new Set(words)];
  words.forEach((item) => {
    if (obj[item]) {
      obj[item] = obj[item] + 1;
    } else {
      obj[item] = 1;
    }
  });
  list.sort((a, b) => {
    if (obj[b] === obj[a]) {
      return a > b ? 1 : -1;
    }
    return obj[b] - obj[a];
  });
  return list.slice(0, k);
};
console.log(topKFrequent(["i", "love", "leetcode", "i", "love", "coding"], 3));

// @lc code=end
