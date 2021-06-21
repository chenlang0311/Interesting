var arr = [[1,2,4],[2,3,7],[3,5,7],[4,5,8]]


let result = [...arr.flat()].sort((a,b)=>a-b)
console.log(result)


function mergeSort(arr){
  let len = arr.length;
  if(len <= 1){
    return arr[0]
  }
  let mid = Math.floor(len/ 2);
  let leftArr = mergeSort(arr.slice(0,mid))
  let rightArr = mergeSort(arr.slice(mid,len))
  arr = mergeArr(leftArr,rightArr)
  return arr
}

function mergeArr(arr1,arr2){
  let i =0 ;j =0 ;
  let res = [];
  let len1 = arr1.length;
  let len2 = arr2.length;
  while(i< len1 && j<len2){
    if(arr1[i]<arr2[j]){
      res.push(arr1[i])
      i++
    }else{
      res.push(arr2[j])
      j++
    }
  }

  if(i<len1){
    return res.concat(arr1.slice(i))
  }else{
    return res.concat(arr2.slice(j))
  }
}

console.log(mergeSort(arr))
