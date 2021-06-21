/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const arr = [...s]
  let res = 1;
  let result = arr.reduce((total, cur, i, arr) => {
      if (i == 0) {
          return cur;
      } else {
          if (total.indexOf(cur) < 0) {
              return total + cur
          } else if (res < total.length) {
              res = total.length
              return total.slice(total.indexOf(cur) + 1, total.length) + cur
          } else {
              return total.slice(total.indexOf(cur) + 1, total.length) + cur
          }
      }
  }, "")
  if (res < result.length) {
      res = result.length
  }

  return res
};

console.log(lengthOfLongestSubstring("loddktdjidsa12345554654645645"))
console.log(lengthOfLongestSubstring("dvdf"))
console.log(lengthOfLongestSubstring("adfafwefffdasdcx"))