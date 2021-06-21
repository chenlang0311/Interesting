let arr = [
  {
    name: '111',
    xxx: '222'
  },
  {
    name: '111',
    xxx: '3333'
  },
  {
    name: '111',
    xxx: '222'
  },
  {
    name: '111',
    xxx: '222'
  },
  {
    name: '111',
    xxx: '3333'
  },
]


function uniqueObj(arr){
  let obj = arr[0];
  let keys = Object.keys(obj);
  let len =arr.length;
  for(let i =0;i<len;i++){
    let f = arr[i]
    for(let j = i+1;j< len;j++){
      let s = arr[j];
      let tmp = keys.length;
      keys.forEach(key=>{
        if(s[key] === f[key]){
          tmp --;
        }
      })
      if(tmp == 0){
        // 一样
        arr.splice(i,1);
        uniqueObj(arr);
        return arr;
      }
    }
  }
  console.log('arr',arr)
  return arr;
}
let ee = uniqueObj(arr);
console.log('uniqueObj',ee)