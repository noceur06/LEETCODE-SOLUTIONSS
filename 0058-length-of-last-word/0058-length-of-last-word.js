/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let arr = s.trim().split(" ");
    let final = arr[arr.length - 1];
   return final.length;
};