/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let reverse = String(x).split("").reverse().join("");
    if(Number(reverse) === x){
        return true;
    }else{
        return false;
    }
   
};