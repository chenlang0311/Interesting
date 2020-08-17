let now  = new Date();
let time = Date.now()
console.log(now)
let year = now.getFullYear()
let month = now.getMonth() +1
let today = now.getDate()
let ONE_DAY = 86400000;
let todayStart = new Date(`${year}-${month}-${today} 00:00:00`).getTime()
let todayEnd = new Date(`${year}-${month}-${today} 23:59:59`).getTime()
console.log(year,month,today,todayStart,todayEnd,isToday(time),isTomorrow(time),isYesterday(time),isTheDayAfterTomorrow(time))


function isToday(time){
  return time >= todayStart && time <= todayEnd
}
function isTomorrow(time){
    return time >= (todayStart+ONE_DAY) && time <= (todayEnd+ONE_DAY)
}
function isYesterday(time){
    return time >= (todayStart-ONE_DAY) && time <= (todayEnd-ONE_DAY)
}
function isTheDayAfterTomorrow(){
    return time >= (todayStart+2*ONE_DAY) && time <= (todayEnd+2*ONE_DAY)
}

