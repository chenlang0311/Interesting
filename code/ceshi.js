javascript:(function () {
  for (var i = 1; i < 50; i++) {
    var href = $('#tMain > tbody > tr:nth-child(' + i + ') > td.text-align-left > a')[0].href.split('fan/')[1].split('?dt')[0];
    var name = $('#tMain > tbody > tr:nth-child(' + i + ') > td.text-align-left > a > span.name')[0].innerHTML;
    var url = `https://yuba.douyu.com/wbapi/web/jumpusercenter?id=${href}&name=${name}`;
    window.open(url);
  }})();