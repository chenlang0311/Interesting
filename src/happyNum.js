// 快乐数 
let counts = []
let result = false
function isHappyNum(num) {
    let numArr = []
    numArr= num.toString().split('')
    let pfh = 0;
    for(let s of numArr){
        pfh = s*s + pfh
    }
    console.log(counts, pfh)
    if(counts.indexOf(pfh) > -1){
        result = false;
        return;
    };
    if(pfh === 1){
        result = true
        return;
    }
    counts.push(pfh)
    isHappyNum(pfh)
}
// isHappyNum(1234562)
// console.log(result)


var isHappy = function(n) {
    let res = sum(n)
    let obj = []
    while(res != 1){
      if (obj.indexOf(res) > -1) return false
      obj.push(res)
      console.log("isHappy",res)
      res = sum(res)
    }
    return true
}
function sum(n){
  n = n + ''
  let sum = 0
  for(let num of n){
    sum += num * num
  }
  return sum
}

console.log('log',isHappy(16))