// 骰子概率问题 n个骰子 和为s ,按s出现的概率升序排列
// 第一步 s的个数(不去重，作为分母) all =  n^2
// 第二步 s的个数(去重) times = 5n +1
// 第三步 每个的权重(每个数出现的次数) 其实就是n个数相加等于s的次数  s>=n;s<=6n;
// 第四步 算出概率

function tt(n){
    let all = Math.pow(6,n);
    let times = 5*n + 1;
    let min = 2*n;
    let max = 6*n;

    console.log(all,times)
    let mm = [];
    for(let i =1 ; i<n;i ++){
        for(let f =1;f<=6;f++){
            for(let s =1;s<=6;s++){
                mm.push(f+s)
            }
        }
    }
    for(let s = min ;s <= max ;s ++){
        checkSum(n,s)
    }
    mm.sort((a,b)=>a-b)
    // console.log(mm,mm.length)

    // return s;
}
function checkSum(n,sum){
    let num = 0;
    
    // for(let i=1 ;i<sum;i++){
    //    num ++
    // }
    console.log(n,sum,num)
    return num
}

tt(2)