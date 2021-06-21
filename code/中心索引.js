// 中心索引
// 给定一个整数类型的数组 nums，请编写一个能够返回数组 “中心索引” 的方法。

// 我们是这样定义数组 中心索引 的：数组中心索引的左侧所有元素相加的和等于右侧所有元素相加的和。

// 如果数组不存在中心索引，那么我们应该返回 -1。如果数组有多个中心索引，那么我们应该返回最靠近左边的那一个。

// let nums = [1, 7, 3, 6, 5, 6];
let nums = [-1, -1, -1, 0, 1, 1];

function getMidIndex(nums) {
  let leftSum = 0;
  let rightSum = 0;
  let result = -1;
  for (let i = 0; i < nums.length; i++) {
    leftSum += nums[i];
    for (let j = nums.length-1; j >= i; j--) {
      rightSum+=nums[j]
    }
    console.log(leftSum,rightSum)
    if(leftSum === rightSum){
      console.log("有结果",i)
      result = i;
      break;
    }else{
      rightSum = 0;
    }
  } 
  return result;
}


console.log(getMidIndex(nums))