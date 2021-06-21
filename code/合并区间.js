// 给出一个区间的集合，请合并所有重叠的区间。
/*
输入: intervals = [[1,3],[2,6],[8,10],[15,18]]
输出: [[1,6],[8,10],[15,18]]
解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6]
*/
// var intervals = [[1,3],[2,6],[8,10],[15,18]]
// var intervals = [[1, 4], [5, 6]];
var intervals = [[1,4],[0,1]]

// var intervals = [[1, 4], [0, 2], [3, 5]]
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) =>  a[0] - b[0])
  let result = [];
  let prev = intervals[0]
  intervals.forEach((el, i) => {
    if (i > 0) {
      console.log('i----', i, el)
      if (prev[1] >= el[0]) {
        prev[1] = Math.max(el[1], prev[1])
      } else {
        result.push(prev)
        prev = el;
      }
    }
  })
  result.push(prev)
  return result
};

merge(intervals)