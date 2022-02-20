/*
 * @lc app=leetcode.cn id=313 lang=javascript
 *
 * [313] 超级丑数
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
var nthSuperUglyNumber = function (n, primes) {
  let result = [1];
  //存放质数对应的下标
  let primesKeyList = new Array(primes.length).fill(0);
  for (let index = 1; index < n; index++) {
    // 遍历质数数组，得到质数、质数下标,通过质树下标得到每个对应的因子，并返回因子*质数，从而得到一个结果数组
    let map = primes.map((primes, i) => result[primesKeyList[i]] * primes);
    //得到最小的质数
    let min = Math.min.apply(null, map);
    primes.forEach((v, i) => {
      if (map[i] === min) primesKeyList[i]++;
    });
    result.push(min);
  }

  return result[n - 1];
};
// @lc code=end
