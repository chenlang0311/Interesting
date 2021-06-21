// 给你一幅由 N × N 矩阵表示的图像，其中每个像素的大小为 4 字节。请你设计一种算法，将图像旋转 90 度。

// 不占用额外内存空间能否做到？
/**
 * 给定 matrix = 
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
],

原地旋转输入矩阵，使其变为:
[
  [7,4,1],
  [8,5,2],
  [9,6,3]
]
 */
var matrix = 
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
]
// 0 - 2   3 * 0 + 2
// 1 - 5   3 * 1 + 2
// 2 - 8   3 * 2 + 2

// 3 - 1   3 * 0 + 1
// 4 - 4   3 * 1 + 1
// 5 - 7   3 * 2 + 1

// 6 - 0   3 * 0 + 0
// 7 - 3   3 * 1 + 0
// 8 - 6   3 * 2 + 0
 /**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  let len = matrix.length;
  let mid = Math.floor(len * len / 2)
  let target = matrix.flat()
  let temp = [];
  let result = [];
  target.forEach((el,i) => {
    if(i<len){
      temp[(len - 1) + (i * len)] = el;
    }else if(i < len * 2){
      temp[(len * (i - len) + (len - 2))] = el;
    }else if(i < len * 3){
      temp[(len * (i - len * 2) + (len - 3))] = el;
    }
  });
  console.log(mid,len,target,temp)
};
console.log([
  [7,4,1],
  [8,5,2],
  [9,6,3]
].flat())
rotate(matrix)