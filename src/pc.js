let today = new Date().toLocaleDateString();
let todayStart = new Date(today).getTime()
let todayEnd = new Date(today + ' 23:59:59').getTime()
let year = new Date().getFullYear();
let month = new Date().getMonth() + 1
let day = new Date().getDate();
let nearSevenDay = [todayStart - 86400000 * 7,todayEnd]
let nearMonthStart = ''
if(month > 1){
  nearMonthStart = new Date(year+'/'+(month-1) + '/' + day).getTime()
}else{
  nearMonthStart = new Date((year - 1)+'/'+ 12 + '/' + day).getTime()
}
let nearMonth = [nearMonthStart, todayEnd]
let nearThreeMonthStart = ''
if(month>3){
  nearThreeMonthStart = new Date(year+'/'+(month-3) + '/' + day).getTime()
}else{
  nearThreeMonthStart = new Date((year - 1)+'/'+ (9  + month) + '/' + day).getTime()
}
let nearThreeMonth = [nearThreeMonthStart, todayEnd]
let nearHalfYearStart = '';
if(month>6){
  nearHalfYearStart = new Date(year+'/'+(month-6) + '/' + day).getTime()
}else{
  nearHalfYearStart = new Date((year - 1)+'/'+ (6  + month) + '/' + day).getTime()
}
let nearHalfYear = [nearHalfYearStart, todayEnd]
let nearYearStart = new Date((year - 1)+'/'+ month + '/' + day).getTime()
let nearYear = [nearYearStart, todayEnd]


function getNearMonthStart(months){
  let lastsYear = Math.ceil(months / 12);
  let month = months % 12;
  let currntYear = new Date().getFullYear();
  let currntMonth = new Date().getMonth() + 1;
  let currntDay = new Date().getDate();
  console.log('l,m',lastsYear,month,months)
  if(currntMonth > month){
    return new Date((currntYear - (months >=12 ? lastsYear: 0))+'/'+(currntMonth-month) + '/' + currntDay).getTime()
  }else{
    return new Date((currntYear - lastsYear)+'/'+ ((12- month )  + currntMonth) + '/' + currntDay).getTime()
  }
}
let sss = getNearMonthStart(24)
console.log('sss',sss)

nearThreeMonth = [getNearMonthStart(3),todayEnd]
console.log(nearThreeMonth)