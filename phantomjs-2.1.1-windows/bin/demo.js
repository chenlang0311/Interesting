var page = require('webpage').create();
phantom.cutputEncoding = 'utf-8';
// page.open("https://www.jianshu.com", function(status) {
//   if(status === "success") {
//     page.render("jianshu.png");
//   } else {
//     console.log("Page failed to load.");
//   };
// phantom.exit();
// });
// page.open("https://www.baidu.com", function(status) {
//   if(status === "success") {
//     page.render("jianshu1.png");
//   } else {
//     console.log("Page failed to load.11111111");
//   };
// phantom.exit();
// });
page.open("https://www.douyu.com", function(status) {
  if(status === "success") {
    page.render("jianshu2.png");
  } else {
    console.log("Page failed to load.2222222222");
  };
  phantom.exit();
});
// page.open("https://www.douyu.com/7680254", function(status) {
//   if(status === "success") {
//     page.render("jianshu3.png");
//   } else {
//     console.log("Page failed to load.33333333333");
//   };
//   phantom.exit();
// });