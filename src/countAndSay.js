/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let result = '1'
    if(n === 1)return '1'
    if(n === 2)return '11'
    if(n === 3)return '21'
    if(n === 4)return '1211'
    if(n === 5)return '111221'
    console.log("Xxxx",n-1)
    countAndSay(n-1)
    // say()
    // console.log(result)
    // return result;
};
function say (result){
    let sayObj = {}
    let sayArr = []
    let tmpArr =[]
    for(let s of result){
        sayArr.push(s)
        sayObj[s] = 1;
    }
    for(let k in sayArr){
        if(sayArr[k] != sayArr[k+1] && k<sayArr.length-1){
            tmpArr[k] = sayArr[k]
        }else{
            tmpArr[k-1] = sayArr[k] + '' +sayArr[k]
            // sayObj[sayArr[k]] ++
        }
    }
    console.log(sayObj,sayArr,tmpArr)
}
console.log(countAndSay(6))


// 8000-5000   13000  39575  27910  39000
// 16000 39575 27910 34180   = 125665
// 13000 - 2000 - 1500  = 9500
// 9500 * 14 = 133000