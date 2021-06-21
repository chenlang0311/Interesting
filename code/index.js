let data = [1, 2, 3, 4, 5, 6, 8, 9, 0, 11, 10]
let all = [];
// 从无序不重复的数组中找到 n 个数，使其和为sum
function getSum(sum, arr, n, temp) {
  console.log("temp1111111",arr)
  if (temp.length === n) {
    // reduce(fn(累计器，当前值，当前索引，当前数组),initValue),最好是要传initValue，
    if (temp.reduce((t, c) => t + c) === sum) {
      console.log("Reduce----",temp)
      return temp
    }
    return false
  }
  for (let i = 0; i < arr.length; i++) {
    let current = arr.shift(); // shift 删除第一个元素，改变原数组
    temp.push(current);
    console.log('temp', temp)
    const result = getSum(sum, arr, n, temp);
    console.log("result",result,arr.length)
    if (result) {
      console.log("xxxxxxxx",i,temp) // ?这个地方为什么会执行 n 次
      return result;
    }
    temp.pop(); // pop 删除最后一个元素，改变原数组
    arr.push(current)
    console.log('temp-----', temp)
  }
}

// 递归  如果一个函数在内部调用自身本身，这个函数就是递归函数。
getSum(10, data,5,[])
// console.log(all)

// let s = data.reduce((a,b) => a+b)

// let ddd = [{ x: 2 }, { x: 3 }, { x: 4 }]
// let s = ddd.reduce((a, b) => console.log('a,b',a,b))
// console.log('ssss', s)
