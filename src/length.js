function getMostNum(arr){
    // let length = arr.length;
    // let obj = {}
    // let result = 0;
    // for(let s of arr){
    //     if(obj[s]){
    //         obj[s] ++;
    //     }else{
    //         obj[s]=1
    //     }
    //     if(obj[s] - Math.floor(length/2)>0){
    //         result = s;
    //         break;
    //     }
    // }
    // return s;
    // return arr.sort((a,b)=>a-b)[Math.floor(length/2)]
    let map = new Map();
    for(let s in arr){
        let val = map.get(arr[s]) || 1
        let value = val+1;
        map.set(arr[s],value)
    }
    return map
}

console.log(getMostNum([1,2,3,4,5,6,7,1,2,3,4,1,2,2,2,2,2,2,2,22,2,2,2,2,2]))