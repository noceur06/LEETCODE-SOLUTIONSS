/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let reverse = String(Math.abs(x)).split("").reverse().join("");
    reverse = Number(reverse);
    if(x < 0){
        reverse = -reverse;
    }
     if(reverse > 2147483647 || reverse < -2147483648){
       return 0;
    }
    return reverse;
};