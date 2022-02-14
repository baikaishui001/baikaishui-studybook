/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function (arr, k) {
  arr.sort((a, b) => a - b);
  return arr.slice(0, k);
};
// console.log(getLeastNumbers([3,2,1],2))

function quick_sort(arr) {
  if (arr.length <= 1) return arr;
  let centerIdx = Math.floor(arr.length / 2);
  let center = arr.splice(centerIdx, 1)[0];
  let min = [],
    maxt = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < center) {
      min.push(arr[i]);
    } else {
      maxt.push(arr[i]);
    }
  }
  return quick_sort(min).concat([center], quick_sort(maxt));
}
var getLeastNumbers1 = function (arr, k) {
  return quick_sort(arr).slice(0, k);
};

var quick_sort2 = function (arr, l, r) {
  if (l >= r) return;
  let l1 = l,
    r1 = r;
  while (l1 < r1) {
    while (l1 < r1 && arr[r1] >= arr[l]) {
      r1--;
    }
    while (l1 < r1 && arr[l1] <= arr[l]) {
      l1++;
    }
    swap(arr, r1, l1);
  }
  swap(arr, l1, l);
  quick_sort2(arr, l, r1 - 1);
  quick_sort2(arr, r1 + 1, r);
};
var swap = function (arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
};
var getLeastNumbers2 = function (arr, k) {
  quick_sort2(arr, 0, arr.length - 1);
  return arr.slice(0, k);
};

console.log(getLeastNumbers2([6, 8, 9, 3, 2, 1, 4, 5, 7], 2));
// quickSort([6,8,9,3,2,1,4,5,7])
