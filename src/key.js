const tree1 = {
    aa: {
        bb: {
            cc: 7777
        }
    },
    cc: null
}
const tree2 = {
    0: {
        id: 0,
        aa: {
            oo: 89,
            bb: {
                cc: 234
            }
        }
    },
    1: {
        id: 1,
        aa: {
            oo: 84,
            bb: {
                cc: '777'
            }
        }
    }
}
const key = 'cc'

function compose(keyName, target, receive){
    let val = '';
    // \(?=,|} 
    let regex = new RegExp('(?<=' + keyName +'":)'+ '.*?(?=("|}))','gim')
    let targetStr = JSON.stringify(target)
    console.log("regex",targetStr,regex)
    let receiveStr = JSON.stringify(receive);
    val = targetStr.match(regex);
    let reVal = receiveStr.match(regex);
    // if(val.length >1)return;
    // let repReg = new RegExp(regex,'g')
    receiveStr.replace(regex,555)
    console.log(reVal,val)
    // for(let key in target){
    //     if(key === keyName){
    //         val = target[key]
    //     }
    //     // console.log(typeof target[key])
    //     if(typeof target[key] === 'object'){
    //         for(let key2 in target[key]){
    //             if(key2 === keyName){
    //                 val = target[key2]
    //             }
    //         }
    //     }
    // }
    // for(let key in receive){
    //     if(key === keyName){
    //         receive[key] = val;
    //     }
    //     if(typeof receive[key] === 'object'){
    //         for(let key2 in receive[key]){
    //             if(key2 === keyName){
    //                 receive[key2]= val
    //             }
    //         }
    //     }
    // }
    // return receive
}

compose(key,tree1,tree2)