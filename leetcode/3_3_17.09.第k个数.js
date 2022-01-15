// @lc code=start
/**
 * @param {number} k
 * @return {number}
 */
var getKthMagicNumber = function (k) {
  let p3=p5=p7=0 ;
  let list = [1];
  for (let m = 0; m < k-1; m++) {
    let val3=list[p3]*3,val5=list[p5]*5,val7=list[p7]*7;
    let min=Math.min(val3,val5,val7);
    list.push(min)
    val3===min&&p3++
    val5===min&&p5++
    val7===min&&p7++
  }
  return list[list.length-1]
};
getKthMagicNumber(9);
