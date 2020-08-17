let map = {
  a: {
    c:'a',
    index: '',
    xxx:'',
    desc: 'aaaaaaaaaa',
    kkkk: ''
  },
  b: {
    c:'b',
    index: '',
    xxx:'',
    desc: 'bbbbbbbb',
    kkkk: ''
  }
}

let targetMap  ={}
let arr =['a', 'b', 'p']
let desc ={
  a: 'aaaaaaaaaa',
  b: 'bbbbbbbb',
  p: 'ppppppppp'
}
let label = {
  a: '填空题',
  b: '测试题',
  p: '父子'
}
arr.forEach(item => {
  let obj = {
    c: item,
    index: '',
    xxx: '',
    list: [],
    label: label[item],
    desc: desc[item]
  }
  if(item === 'p'){
    obj['subitem'] = 'iiiiiiii'
  }
  targetMap[item] = obj
})

console.log('xxxxxxxxxx',targetMap)