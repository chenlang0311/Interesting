const jsdom = require('jsdom');
const { JSDOM } = jsdom;
var _ = require('lodash');
var ps = require('current-processes');

function doOne(i) {
  /* 模拟window对象逻辑 */
  const resourceLoader = new jsdom.ResourceLoader({
    // userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1",
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36',
  });// 设置UA
  const dom = new JSDOM('', {
    url: 'http://localhost:4907',
    resources: resourceLoader,
  });
  global.window = dom.window;
  global.document = window.document;
  global.navigator = window.navigator;
  global.location = window.location;
  global.localStorage = window.localStorage;
  // global.Blob = Blob;
  // global.XMLHttpRequest = XMLHttpRequest;
  window.nodeis = true; // 给window标识出node环境的标志位
  setTimeout(()=>{
    window.close();
 
    if(global.gc){
      global.gc();
    }
  },0)
  
  console.log("doOne",i)
  osUtils.getCPULoadavg({ percentage: true }).then(res => {console.log('当前CPU 利用率：', res)});
  console.log('当前内存信息：',osUtils.getMemoryUsage(true))
}

const os = require('os')
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

class OsUtils {
  /**
   * 获取某一时间段内的 CPU 利用率
   * @param { Number } Options.ms 默认是 1000ms
   * @param { Boolean } Options.percentage true（以百分比结果返回）| false(小数返回) 
   * @returns { Promise } CPU 利用率
   */
  async getCPULoadavg(options = {}) {
    const that = this;
    const { cpuUsageMS = 1000, percentage = false } = options
    const t1 = that._getCPUMetric()
    await sleep(cpuUsageMS)
    const t2 = that._getCPUMetric()
    const idle = t2.idle - t1.idle
    const total = t2.total - t1.total
    let usage = 1 - idle / total

    percentage && (usage = `${(usage * 100.0).toFixed(2)}%`)

    return usage
  }

  /**
   * 获取 内存 信息
   * @param { Boolean } percentage true（以百分比结果返回）| false(小数返回)
   * @returns { Object } 内存 信息
   */
  getMemoryUsage(percentage = false) {
    const { rss, heapUsed, heapTotal } = process.memoryUsage()
    const sysFree = os.freemem()
    const sysTotal = os.totalmem();
    return {
      sys: percentage ? `${(1 - sysFree / sysTotal).toFixed(2) * 100}%` : 1 - sysFree / sysTotal,  
      heap: percentage ? `${(heapUsed / heapTotal).toFixed(2) * 100}%` : heapUsed / heapTotal,   
      node: percentage ? `${(rss / sysTotal).toFixed(2) * 100}%` : rss / sysTotal      
    }
  }

  /**
   * 获取 CPU 信息
   * @returns { Object } CPU 信息
   */
  _getCPUMetric() {
    const cpus = os.cpus();
    let user = 0, nice = 0, sys = 0, idle = 0, irq = 0, total = 0

    for (let cpu in cpus) {
      const times = cpus[cpu].times
      user += times.user
      nice += times.nice
      sys += times.sys
      idle += times.idle
      irq += times.irq
    }

    total += user + nice + sys + idle + irq

    return {
      user,
      sys,
      idle,
      total,
    }
  }
}

const osUtils = new OsUtils()

for (let i = 0; i < 6000; i++) {
  doOne(i);
  // console.log("doOne",i)
  // osUtils.getCPULoadavg({ percentage: true }).then(res => {console.log('当前CPU 利用率：', res)});
  // console.log('当前内存信息：',osUtils.getMemoryUsage(true))
  // setInterval(()=>{
  //   console.log('')
  // },1000)
  // if (i % 500 == 0) {
  //   console.log('I:   1111111111111 ',i);
  //   ps.get(function (err, processes) {
  //     var sorted = _.sortBy(processes, 'cpu');
  //     var top5 = sorted.reverse().splice(0, 5);
  //     console.log('I:   +++++', top5);
  //   });
  // }
}


setInterval(()=>{
  osUtils.getCPULoadavg({ percentage: true }).then(res => {console.log('当前CPU 利用率-------------：', res)});
  console.log('当前内存信息------：',osUtils.getMemoryUsage(true))
},2000)

