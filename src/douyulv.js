const allFensLv=[{
    lv:1,
    exp:60,
    dailyMax:500,
    dailyFree:10
},{
    lv:2,
    exp:80,
    dailyMax:500,
    dailyFree:10
},{
    lv:3,
    exp:120,
    dailyMax:500,
    dailyFree:10
},{
    lv:4,
    exp:240,
    dailyMax:500,
    dailyFree:15
},{
    lv:5,
    exp:435,
    dailyMax:500,
    dailyFree:15
},{
    lv:6,
    exp:690,
    dailyMax:1000,
    dailyFree:15
},{
    lv:7,
    exp:1090,
    dailyMax:1000,
    dailyFree:20
},{
    lv:8,
    exp:1715,
    dailyMax:1000,
    dailyFree:25
},{
    lv:9,
    exp:2765,
    dailyMax:1000,
    dailyFree:30
},{
    lv:10,
    exp:4340,
    dailyMax:1500,
    dailyFree:35
},{
    lv:11,
    exp:6700,
    dailyMax:1500,
    dailyFree:40
},{
    lv:12,
    exp:10000,
    dailyMax:1500,
    dailyFree:45
},{
    lv:13,
    exp:15000,
    dailyMax:1500,
    dailyFree:50
},{
    lv:14,
    exp:21000,
    dailyMax:1500,
    dailyFree:50
},{
    lv:15,
    exp:27440,
    dailyMax:2000,
    dailyFree:50
},{
    lv:16,
    exp:34500,
    dailyMax:2000,
    dailyFree:60
},{
    lv:17,
    exp:43000,
    dailyMax:2000,
    dailyFree:60
},{
    lv:18,
    exp:52500,
    dailyMax:2000,
    dailyFree:60
},{
    lv:19,
    exp:65500,
    dailyMax:2000,
    dailyFree:70
},{
    lv:20,
    exp:83500,
    dailyMax:2500,
    dailyFree:70
},{
    lv:21,
    exp:110000,
    dailyMax:2500,
    dailyFree:70
},{
    lv:22,
    exp:140000,
    dailyMax:2500,
    dailyFree:80
},{
    lv:23,
    exp:175000,
    dailyMax:2500,
    dailyFree:80
},{
    lv:24,
    exp:215000,
    dailyMax:2500,
    dailyFree:80
},{
    lv:25,
    exp:268000,
    dailyMax:2700,
    dailyFree:90
},{
    lv:26,
    exp:345000,
    dailyMax:3000,
    dailyFree:90
},{
    lv:27,
    exp:454000,
    dailyMax:3500,
    dailyFree:90
},{
    lv:28,
    exp:588000,
    dailyMax:4000,
    dailyFree:100
},{
    lv:29,
    exp:760000,
    dailyMax:4500,
    dailyFree:100
},{
    lv:30,
    exp:1000000,
    dailyMax:5000,
    dailyFree:100
}]
const zhuboLv={
    lv10:10500,
    lv20:110000,
    lv30:720000,
    lv40:2560000,
    lv50:8050000,
    lv60:18045000,
    lv65:28045000,
    lv70:40545000,
    lv80:70545000,
    lv85:95545000,
    lv90:130545000,
    lv95:175545000,
    lv100:235545000
} 
let accountNum = 100;
const FIRST_DAY_MONEY = 50;
let firstDayExp = FIRST_DAY_MONEY*accountNum*10;
let firstDayLv = 5;
let currentDay = 1;
let myLv = firstDayLv;
console.log(firstDayExp)
function checkZhuboDay(lv){
    let tagetNeedExp = zhuboLv[`lv${lv}`];
    console.log("tagetNeedExp",tagetNeedExp)
    if(tagetNeedExp<firstDayExp)return '1';
    // TODO 递归算出来需要多少天
    for(let i = firstDayLv;i<allFensLv.length;i++){
        let myExp = allFensLv[myLv].exp;
        let myDailyFree = allFensLv[myLv].dailyFree;
        let nextLv = allFensLv[i].lv;
        let nextExp = allFensLv[i].exp;
        let nextDayFree = allFensLv[i].dailyFree;
        console.log('currentLv',nextLv,nextExp,nextDayFree)
        // if( nextLv == myLv){
        //   console.log('currentLv',nextLv,nextExp,nextDayFree)
        // }
    }
}
function checkDay (){
    
}
let needDay = checkZhuboDay(20)
console.log('needDay',needDay)