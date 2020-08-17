let str = '#思维  #逆向思维 看男子如何机智应对“碰瓷女”@抖音小助手 https://v.douyin.com/JjesCby/ 复制此链接，打开【抖音短视频】，直接观看视频！'
let linkReg = /^https:\/\/v.douyin.com\/.*$复制/gi;
// let result =  str.match(linkReg);
let result = ''
let ttt = str.split(" ");
console.log(ttt.length)
for(let s of ttt){
  if(s.indexOf("https://v.douyin.com") > -1){
    result = s;
  }
}
console.log(result)
let title = str.split(result)[0]
console.log(title)