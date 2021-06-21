// var trap = function(height) {
//   let maxHeight = 0;
//   // let bucketStartIndex = [];
//   // let bucketEndIndex = [];
//   for (let k=0; k<= height.length;k++){
//     if(maxHeight<height[k]){
//       maxHeight = height[k]
//     }
//     // if(height[k]-height[(k+1)]>0 && k<=height.length -2){
//     //   bucketStartIndex.push(k)
//     // }
//     // if(height[k]-height[(k+1)]>0 && k<=height.length -2){
//     //   bucketStartIndex.push(k)
//     // }
//   }
//   let obj = {}
//   for(let k =0 ; k<=maxHeight;k++){
//     obj[k] = {
//       times: 0,
//       indexs:[]
//     };

//   }
//   for(let k =0 ; k<=maxHeight;k++){
//     height.forEach((el,i) => {
//       if(el === k){
//         obj[k].times ++;
//         obj[k].indexs.push(i)
//       }
//     });
//   }
//   let maxHeightIsCanUsed = obj[maxHeight].times % 2 === 0;
//   if(maxHeightIsCanUsed){

//   }else{
//     for(let i = maxHeight -1;i>=0;i--){
//       console.log('obj[i].indexs',i,obj[i].indexs)
//       for(let key of obj[i].indexs){
//         console.log("key",key)
//       }
//     }
//   }
//   // for(let k in obj){
    
//   // }
//   // makeBucket(height[k])

//   console.log("h",obj,maxHeightIsCanUsed)
// };



var trap = function(height) {
  let sum = 0
  for(let index=1; index<height.length-1; index++){
      let leftMax = 0 //找左边最大高度
      for(let i=index-1; i>=0; i--){
          leftMax = height[i] >= leftMax ? height[i] : leftMax
      }
      let rightMax = 0 //找右边最大高度
      for(let i=index+1; i<height.length; i++){
          rightMax = height[i] >= rightMax ? height[i] : rightMax
      }
      let min = Math.min(leftMax, rightMax) //得到左右两边最大高度中较矮的那个高度
      if(min > height[index]){
          sum = sum + min - height[index] //接水量 = 左右两边最大高度中较矮的那个高度 - 当前项的高度
      }
      //console.log(leftMax, rightMax, sum)
  }
  console.log('sum',sum)
  return sum
};

let h = [0,1,0,2,1,0,1,3,2,1,2,1]
trap(h)