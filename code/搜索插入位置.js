//给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

// 你可以假设数组中无重复元素。

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let result = nums.length;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == target || nums[i] > target) {
      result = i
      break;
    }
  }
  return result
};

// break无法在forEach循环中使用
searchInsert()