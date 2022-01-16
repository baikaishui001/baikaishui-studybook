/*
 * @lc app=leetcode.cn id=969 lang=javascript
 *
 * [969] 煎饼排序
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var reverse = function(arr,mi){
    let a=0
    while(a < mi-1 ){
        [ arr[a], arr[mi-1] ] = [ arr[mi-1] , arr[a] ];
        a++;
        mi--;
    }
}
 var pancakeSort = function(arr) {
    let list=[],max=0
    for(let i=arr.length; i>1; i--){
        for(let mi=0;mi<i;mi++){
            if(arr[mi]>arr[max]){
                max=mi
            }
        }
        reverse(arr,max+1)
        list.push(max+1)
        reverse(arr,i)
        list.push(i)
    }
    return list
};
console.log(pancakeSort([3,2,4,1]))
// @lc code=end

