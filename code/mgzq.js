// let data = [
//   [8, 1, 4, -5, 0],
//   [1, -9, -5, -5, 1],
//   [1, 2, 0, 3, -5],
//   [4, -5, 5, 3, 6],
//   [8, 2, 5, 3, 10]
// ]
let data = [
  [9, 0, 8, 0, 8],
  [-6, 5, 2, -7, 8],
  [-1, -9, 0, 6, -6],
  [3, 6, 4, 9, -2],
  [-3, -5, -4, 3, 8]
]

function getMoney(data) {
  let fMoney = data[0][0];
  let targetData = [];
  let moreIndexs = [];
  let maxMoney = 0;
  data.forEach((el, x) => {
    targetData[x] = []
    el.forEach((value, y) => {
      if(value > 0){
        moreIndexs.push({x,y,value});
        maxMoney += value;
      }
      targetData[x].push({
        x,
        y,
        value,
        isVisited: false
      })
    })
  })
  let len = data.length - 1;
  let currentPosition = {};
  let todoPoints = [{ x: 0, y: 0, value: fMoney }];
  let routes = [];
  let allMoney = fMoney;
  console.log("targetData",targetData,moreIndexs,maxMoney)
  while(!(currentPosition.x == len && currentPosition.y == len) && todoPoints.length){
    currentPosition = todoPoints.pop();
    routes.push(currentPosition);
    // console.log("currentPosition",currentPosition)
    targetData[currentPosition.x][currentPosition.y].isVisited = true;
    // allMoney = targetData[currentPosition.x][currentPosition.y].value + allMoney;
    let tag = true;
    if(targetData[currentPosition.x - 1] && targetData[currentPosition.x - 1][currentPosition.y] && targetData[currentPosition.x - 1][currentPosition.y].value  + allMoney>= 0 && allMoney >= 0 ){
      // 左边
      console.log("左边---")
      allMoney = allMoney - 1;
      tag = false;
      todoPoints.push({
        x: currentPosition.x - 1,
        y: currentPosition.y,
        origin: `${currentPosition.x}-${currentPosition.y}`,
        value: targetData[currentPosition.x - 1][currentPosition.y].value *1
      })
      if(!targetData[currentPosition.x - 1][currentPosition.y].isVisited){
        allMoney= targetData[currentPosition.x - 1][currentPosition.y].value *1 + allMoney
      }
      targetData[currentPosition.x - 1][currentPosition.y].value  = 0

    }
    if(targetData[currentPosition.x + 1] && targetData[currentPosition.x + 1][currentPosition.y] && targetData[currentPosition.x + 1][currentPosition.y].value + allMoney>= 0 && allMoney >= 0 ){
      // 右边
      console.log("右边---")
      allMoney = allMoney - 1;
      tag = false;
      todoPoints.push({
        x: currentPosition.x + 1,
        y: currentPosition.y,
        origin: `${currentPosition.x}-${currentPosition.y}`,
        value: targetData[currentPosition.x + 1][currentPosition.y].value *1
      })
      if(!targetData[currentPosition.x + 1][currentPosition.y].isVisited){
        allMoney = targetData[currentPosition.x + 1][currentPosition.y].value*1 + allMoney
      }
      targetData[currentPosition.x + 1][currentPosition.y].value= 0

    }
    if(targetData[currentPosition.x][currentPosition.y - 1] && targetData[currentPosition.x][currentPosition.y - 1] && targetData[currentPosition.x][currentPosition.y - 1].value +allMoney >= 0 && allMoney >= 0 ){
      // 上边
      console.log("上边---")
      allMoney = allMoney - 1;

      tag = false;
      todoPoints.push({
        x: currentPosition.x,
        y: currentPosition.y - 1,
        origin: `${currentPosition.x}-${currentPosition.y}`,
        value:  targetData[currentPosition.x ][currentPosition.y-1].value*1
        
      })
      if(!targetData[currentPosition.x][currentPosition.y-1].isVisited){
        allMoney  =  targetData[currentPosition.x ][currentPosition.y-1].value*1 + allMoney
      }
      targetData[currentPosition.x ][currentPosition.y-1].value = 0
    }
    if(targetData[currentPosition.x][currentPosition.y + 1] && targetData[currentPosition.x][currentPosition.y + 1].value  + allMoney >= 0 && allMoney >= 0 ){
      // 下边
      console.log("下边---")
      allMoney = allMoney - 1;
      tag = false;
      todoPoints.push({
        x: currentPosition.x,
        y: currentPosition.y + 1,
        origin: `${currentPosition.x}-${currentPosition.y}`,
        value : targetData[currentPosition.x ][currentPosition.y+1].value*1
      })
      if(!targetData[currentPosition.x][currentPosition.y + 1 ].isVisited){
        allMoney   = targetData[currentPosition.x ][currentPosition.y+1].value*1 + allMoney
      }
      targetData[currentPosition.x ][currentPosition.y+1] = 0
    }
    if (tag) {
      // let nextPosition = todoPoints[todoPoints.length - 1];
      let pointer = routes.pop();
      // console.log("tagtagtag",nextPosition,todoPoints)
      while (allMoney > 0) {
        pointer = routes.pop();
      }
      routes.push(pointer);
    }
    // console.log("allMoney",allMoney)
  }
  // 上下左右操作
  // 赚钱
  // 边界值检测
  // 目标点 data[len][len]
  //
  let result = [];
  let myMoney = 0;
  routes.forEach(el=>{
    result.push([el.x,el.y])
    myMoney += el.value
  })
  console.log('routes',routes,result,allMoney,myMoney)
  // console.log(targetData, fMoney, len);
}

getMoney(data)