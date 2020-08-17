/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    console.log("hhhh---",haystack.indexOf(needle))
    return haystack.indexOf(needle)
    if(needle === '')return 0;
    let regEx = new RegExp(needle, 'g')
    let match = haystack.match(regEx);
    if(match === null)return -1;
    return haystack.indexOf(needle)
};

strStr("hello","")