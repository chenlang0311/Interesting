let puke = [0, 0]
let huase = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
let allHuase = huase.concat(huase).concat(huase).concat(huase)
puke = puke.concat(allHuase)
// console.log(puke.sort((a,b)=>a-b))
let five = sjsz(54).splice(0, 5)
function sjsz(num) {
    var ary = [];                    //创建一个空数组用来保存随机数组
    for (var i = 0; i < num; i++) {            //按照正常排序填充数组
        ary[i] = i + 1;
    }
    ary.sort(function () {
        return 0.5 - Math.random();        //返回随机正负值
    });
    return ary;                    //返回数组
}

function getPai(five) {
    let arr = []
    for (let s of five) {
        arr.push(puke[s])
    }
    return arr;
}
let randPai = getPai(five)
// console.log('fie',randPai)
function shunzi(randPai) {
    let isTwoZero = false;
    randPai.sort((a, b) => a - b)
    for (let i = 0; i < 5; i++) {
        if (randPai[i] == randPai[i + 1]) {
            console.log("有重复内容：" + randPai[i]);
            if (randPai[i] !== 0) {
                return false
            } else {
                isTwoZero = true
            }
        }
    }
    let cha = 5
    if (isTwoZero) return randPai[4] - randPai[2] <= cha - 2;
    if (randPai[0] === 0) return randPai[4] - randPai[1] <= cha - 1
    return randPai[4] - randPai[0] === cha
}
console.log(shunzi([0, 4, 1, 0, 2]))