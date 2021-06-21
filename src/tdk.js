let xlsx = require('node-xlsx');
let fs = require('fs');
// var sheets = xlsx.parse("../" + "tdk.xlsx");
var sheets = xlsx.parse("./" + "tdk3.xlsx");
// console.log(obj);
let obj = {
  '/course/explore':{
    categoryId:{}
  }
};

// 可以使用exec 来执行系统的默认命令；child_process为内置模块 
const {exec} = require("child_process");
//传入url
function openUrl(url) {
    // 拿到当前系统的参数
    switch (process.platform) {
        //mac系统使用 一下命令打开url在浏览器
        case "darwin":
            exec(`open ${url}`);
        //win系统使用 一下命令打开url在浏览器
        case "win32":
            exec(`start ${url}`);
            // 默认mac系统
        default:
            exec(`open ${url}`);
    }
  }

for(let sheet of sheets){
  let {data } = sheet;
  console.log('data---',data)
  // data.shift();
  for(let line of data){
    if(line.length>0){
      if(line[5] && line[5].includes('v1-39-0.btclass.net')){
        openUrl(line[5])
      }
    // console.log('line',line)
    // line.push(line[1].replace('www.btclass.cn','v1-39-0.btclass.net'))
    let key;
    let pathAndQuery = line[1].split('https://www.btclass.cn')[1]
    if(pathAndQuery){
      let path = pathAndQuery.split('?')[0]
      let queryString = pathAndQuery.split('?')[1]
      if(queryString){
        let title = line[2]
        let keywords = line[3]
        let description = line[4]
        let queryArr = queryString.split('&')
        for(let s of queryArr){
          // console.log('categoryId',path,s)
          if(s.includes('categoryId')){
            let categoryId = s.split('=')[1]
            obj['/course/explore']['categoryId'][categoryId] = {
              title,
              description,
              keywords
            }
          }
        }
      }else{
        let title = line[2]
        let  keywords = line[3]
        let description = line[4]
        obj[path] = {
          title,
          description,
          keywords
        }
      }
      // 
      key = line[1].split('https://www.btclass.cn')[1].split('?')[0]
    }
    // if(key){
    //   let title = line[2]
    //   let description = line[3]
    //   let keywords = line[4]
      
    //   obj[key] = {
    //     title,
    //     description,
    //     keywords
    //   }
    //   // console.log(obj)
    // }    
    }
  }
}
function getQueryString(url,name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  var r = url.match(reg);
  console.log(r)
  if (r != null) {
    return decodeURIComponent(r[2]);
  }
  return null;
}
// fs.writeFile('./tdk2.js','module.exports = ' + JSON.stringify(obj,null ,4), function (err)
// {
//     if (err)

//         throw err;
//     console.log('Write to xlsx has finished');
// }
// );
// var buffer = xlsx.build(sheets);
// fs.writeFile('./tdk3.xlsx',buffer, function (err)
// {
//     if (err)

//         throw err;
//     console.log('Write to xlsx has finished');
// }
// );
