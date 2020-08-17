let today = new Date().toLocaleDateString();
let todayStart = new Date(today).getTime()
let todayEnd = new Date(today + ' 23:59:59').getTime()
console.log(today,todayStart, todayEnd)
let year = new Date().getFullYear();
console.log(year)
let month = new Date().getMonth() + 1
console.log(month)
let day = new Date().getDate();
console.log(day)
let nearSevenDay = [todayStart - 86400000 * 7,todayEnd]
console.log(nearSevenDay)
let nearMonthStart = ''
if(month > 1){
  nearMonthStart = new Date(year+'/'+(month-1) + '/' + day).getTime()
}else{
  nearMonthStart = new Date((year - 1)+'/'+ 12 + '/' + day).getTime()
}
let nearMonth = [nearMonthStart, todayEnd]
console.log(nearMonth)
let nearThreeMonthStart = ''
if(month>3){
  nearThreeMonthStart = new Date(year+'/'+(month-3) + '/' + day).getTime()
}else{
  nearThreeMonthStart = new Date((year - 1)+'/'+ (9  + month) + '/' + day).getTime()
}
let nearThreeMonth = [nearThreeMonthStart, todayEnd]
console.log(nearThreeMonth)
let nearHalfYearStart = '';
if(month>6){
  nearHalfYearStart = new Date(year+'/'+(month-6) + '/' + day).getTime()
}else{
  nearHalfYearStart = new Date((year - 1)+'/'+ (6  + month) + '/' + day).getTime()
}
let nearHalfYear = [nearHalfYearStart, todayEnd]
console.log(nearHalfYear)
let nearYearStart = new Date((year - 1)+'/'+ month + '/' + day).getTime()
let nearYear = [nearYearStart, todayEnd]
console.log(nearYear)