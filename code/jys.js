// 接雨水
let data = require('./jys.json')
let heightData = data.map(el=>{return el.y})
// let fData = [];
// heightData.forEach(el=>{
//   fData = fData.concat([el,0])
// })

// console.log(fData)
var trap = function (height) {
  let left = 0;
  let right = height.length - 1;
  let res = 0;
  let leftMax = 0;
  let rightMax = 0;
  let result = [];
  while (left < right) {
    if (height[left] < height[right]) {
      leftMax = Math.max(height[left], leftMax);
      result.push({
        left,
        right,
        value: (right - left)*(leftMax - height[left])
      })
      console.log('右边--------(right - left)*(leftMax - height[left])',right , left,leftMax, (leftMax - height[left]))
      res += leftMax - height[left];
      left++;
    } else {
      rightMax = Math.max(height[right], rightMax);
      result.push({
        left,
        right,
        value:  (right - left) * (rightMax - height[right])
      })
      console.log('左边--------(right - left)*(leftMax - height[left])',right , left,rightMax,(rightMax - height[right]))
      res += rightMax - height[right];
      right--;
    }
  }
  let target = result.filter(el=>{
    return +el.value > 0
  })
  let targetMap = {}
  let all = 0;
  target.forEach(el=>{
    all += Number(el.value)
    if(!targetMap[el.left]){
      targetMap[el.left] = {};
      targetMap[el.left][el.right] = el.value;
    }else{
      targetMap[el.left][el.right] = el.value;
    }
  })
  // console.log('rightMax',result)
  return res;
};

console.log(trap(heightData))