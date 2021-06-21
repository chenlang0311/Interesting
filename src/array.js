Array.prototype.btComposeUserInfo = async function(key = 'userId') {
  
  let userIds = [];
  this.forEach(el=>{
    if (!userIds.includes(el[key])) {
      userIds.push(el[key]);
    }
  })
  console.log(userIds)
  return this;
}

let arr = [{userId:1},{userId:2}]

arr.btComposeUserInfo().then(res=>{
console.log("Result",res)

})
