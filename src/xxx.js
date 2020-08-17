function xxx(arr) {
  let map = {};
  for (let s of arr) {
    map[s.substring(0, 2)] = {
      startNum: 0,
      hasNum: []
    }
  }
  arr.forEach((el, i) => {
    for (let key in map) {
      if (key === el.substring(0, 2)) {
        map[key].startNum++;
        if (el.substring(2, 6) === '0000') {
          map[key].hasNum.push(i)
        }
      }
    }
  });
  console.log(arr,map)

  for (let k in map) {
    if (map[k].startNum > 1 && map[k].hasNum.length > 0) {
      for (let s of map[k].hasNum) {
        arr.splice(s, 1)
      }
    }
  }
  return arr;
}
let arr1 = ["130000", "140000"]
let arr = ["130000", "130100", "130200", "140000"]
xxx(arr)