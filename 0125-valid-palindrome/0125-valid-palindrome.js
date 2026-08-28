/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
       let str = s.toLowerCase().replace(/[^a-z0-9]/g, "");

    let reverse = str.split("").reverse().join("");

    return str === reverse;
};