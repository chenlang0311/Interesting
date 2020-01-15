let xlsx = require('node-xlsx');
let fs = require('fs');
let res = [{"id":1,"name":"银行","children":[{"id":2,"name":"柜员","isHot":false},{"id":43,"name":"大堂经理","isHot":false},{"id":44,"name":"理财顾问","isHot":false},{"id":45,"name":"客户经理","isHot":false},{"id":46,"name":"客户助理","isHot":false},{"id":53,"name":"同业业务","isHot":false},{"id":54,"name":"投行业务","isHot":false},{"id":55,"name":"信贷管理","isHot":false},{"id":56,"name":"风控","isHot":false},{"id":57,"name":"内审","isHot":false},{"id":58,"name":"财务","isHot":false},{"id":59,"name":"法务","isHot":false},{"id":60,"name":"副行长","isHot":false},{"id":61,"name":"行长","isHot":false},{"id":72,"name":"其他","isHot":false}],"hot":[{"id":2,"name":"柜员","isHot":false},{"id":43,"name":"大堂经理","isHot":false},{"id":44,"name":"理财顾问","isHot":false}]},{"id":9,"name":"证券/基金","children":[{"id":42,"name":"理财经理","isHot":true},{"id":62,"name":"基金经理","isHot":true},{"id":63,"name":"资产管理","isHot":false},{"id":64,"name":"证券经纪人","isHot":false},{"id":65,"name":"基金投资顾问","isHot":false},{"id":66,"name":"客户经理","isHot":false},{"id":67,"name":"资产证券化ABS","isHot":false},{"id":68,"name":"固定收益投资经理","isHot":false},{"id":69,"name":"分析师","isHot":true},{"id":70,"name":"行业研究员","isHot":false},{"id":71,"name":"基金会计","isHot":true},{"id":73,"name":"财务","isHot":false},{"id":74,"name":"法务","isHot":false},{"id":75,"name":"其他","isHot":false}],"hot":[{"id":42,"name":"理财经理","isHot":true},{"id":62,"name":"基金经理","isHot":true},{"id":69,"name":"分析师","isHot":true},{"id":71,"name":"基金会计","isHot":true}]},{"id":10,"name":"信托/期货","children":[{"id":47,"name":"信托经理","isHot":true},{"id":76,"name":"理财经理","isHot":true},{"id":77,"name":"交易员","isHot":false},{"id":78,"name":"期货经纪人","isHot":false},{"id":79,"name":"期货交易员","isHot":false},{"id":80,"name":"客户经理","isHot":true},{"id":81,"name":"投资顾问","isHot":false},{"id":82,"name":"销售岗","isHot":false},{"id":83,"name":"风控","isHot":false},{"id":84,"name":"财务","isHot":false},{"id":85,"name":"法务","isHot":false},{"id":86,"name":"其他","isHot":false}],"hot":[{"id":47,"name":"信托经理","isHot":true},{"id":76,"name":"理财经理","isHot":true},{"id":80,"name":"客户经理","isHot":true}]},{"id":18,"name":"PE/VC","children":[{"id":48,"name":"投资经理","isHot":true},{"id":87,"name":"投资总监","isHot":false},{"id":88,"name":"资金募集","isHot":false},{"id":89,"name":"基金经理","isHot":false},{"id":90,"name":"战略投资分析师","isHot":false},{"id":91,"name":"风险质控","isHot":false},{"id":92,"name":"投后管理","isHot":true},{"id":93,"name":"投资顾问","isHot":true},{"id":94,"name":"基金会计","isHot":false},{"id":95,"name":"财务","isHot":false},{"id":96,"name":"法务","isHot":false},{"id":97,"name":"其他","isHot":false}],"hot":[{"id":48,"name":"投资经理","isHot":true},{"id":92,"name":"投后管理","isHot":true},{"id":93,"name":"投资顾问","isHot":true}]},{"id":21,"name":"保险","children":[{"id":22,"name":"保险业务销售","isHot":true},{"id":23,"name":"精算师","isHot":true},{"id":24,"name":"财务","isHot":false},{"id":98,"name":"法务","isHot":true},{"id":99,"name":"其他","isHot":false}],"hot":[{"id":22,"name":"保险业务销售","isHot":true},{"id":23,"name":"精算师","isHot":true},{"id":98,"name":"法务","isHot":true}]},{"id":25,"name":"企业财务","children":[{"id":26,"name":"财务","isHot":true},{"id":28,"name":"出纳","isHot":false},{"id":29,"name":"会计","isHot":true},{"id":33,"name":"结算","isHot":true},{"id":34,"name":"税务","isHot":true},{"id":35,"name":"财务风控","isHot":true},{"id":36,"name":"成本","isHot":false},{"id":37,"name":"资产","isHot":false},{"id":102,"name":"财务顾问","isHot":true},{"id":103,"name":"财务主管","isHot":false},{"id":104,"name":"总会计师","isHot":false},{"id":105,"name":"CFO","isHot":false},{"id":106,"name":"分析","isHot":true},{"id":123,"name":"其他","isHot":false}],"hot":[{"id":26,"name":"财务","isHot":true},{"id":29,"name":"会计","isHot":true},{"id":33,"name":"结算","isHot":true},{"id":34,"name":"税务","isHot":true},{"id":35,"name":"财务风控","isHot":true},{"id":102,"name":"财务顾问","isHot":true},{"id":106,"name":"分析","isHot":true}]},{"id":27,"name":"审计/咨询","children":[{"id":38,"name":"审计员","isHot":true},{"id":39,"name":"审计经理","isHot":true},{"id":40,"name":"事务所合伙人","isHot":false},{"id":41,"name":"四大FDD","isHot":false},{"id":100,"name":"财务咨询","isHot":false},{"id":101,"name":"投资并购咨询","isHot":false},{"id":107,"name":"咨询顾问","isHot":true},{"id":108,"name":"内部审计","isHot":false},{"id":109,"name":"其他","isHot":false}],"hot":[{"id":38,"name":"审计员","isHot":true},{"id":39,"name":"审计经理","isHot":true},{"id":107,"name":"咨询顾问","isHot":true}]},{"id":30,"name":"法律","children":[{"id":49,"name":"诉讼律师","isHot":true},{"id":110,"name":"非诉律师","isHot":false},{"id":111,"name":"法务","isHot":false},{"id":112,"name":"企业律师","isHot":true},{"id":113,"name":"专利","isHot":false},{"id":114,"name":"知识产权","isHot":false},{"id":115,"name":"法律顾问","isHot":true},{"id":116,"name":"合规","isHot":false},{"id":117,"name":"其他","isHot":false},{"id":128,"name":"律师","isHot":false}],"hot":[{"id":49,"name":"诉讼律师","isHot":true},{"id":112,"name":"企业律师","isHot":true},{"id":115,"name":"法律顾问","isHot":true}]},{"id":31,"name":"职能","children":[{"id":50,"name":"行政","isHot":true},{"id":118,"name":"人事","isHot":true},{"id":119,"name":"总经理助理","isHot":false},{"id":120,"name":"秘书","isHot":false},{"id":121,"name":"人事主管","isHot":true},{"id":122,"name":"人事总监","isHot":false},{"id":124,"name":"其他","isHot":false}],"hot":[{"id":50,"name":"行政","isHot":true},{"id":118,"name":"人事","isHot":true},{"id":121,"name":"人事主管","isHot":true}]},{"id":32,"name":"其他","children":[{"id":51,"name":"互联网金融","isHot":true},{"id":52,"name":"IT/互联网","isHot":false},{"id":125,"name":"其他","isHot":false}],"hot":[{"id":51,"name":"互联网金融","isHot":true},{"id":52,"name":"IT/互联网","isHot":false},{"id":125,"name":"其他","isHot":false}]}];
let _res =[];
for(let s of res){
   let obj = [
       s.id,
       s.name,
       `pages/commonPages/SearchResult/main?scene=${s.id}`
    ]
   _res.push(obj);
   for(let item of s.children){
       let sObj =[
        item.id,
        item.name,
        `pages/commonPages/SearchResult/main?scene=${item.id}`
    ]
       _res.push(sObj);
   }
}
// console.log(_res)
let data = [{
    name:"sheet1",
    data:[
        [
            "ID",
            "Name",
            "path"
        ],..._res
    ]
}]
// console.log(data)
// // 写xlsx
var buffer = xlsx.build(data);
fs.writeFile('./resut.xlsx', buffer, function (err)
{
    if (err)
        throw err;
    console.log('Write to xlsx has finished');
    
// 读xlsx
    var obj = xlsx.parse("./" + "resut.xlsx");
    console.log(JSON.stringify(obj));
}
);