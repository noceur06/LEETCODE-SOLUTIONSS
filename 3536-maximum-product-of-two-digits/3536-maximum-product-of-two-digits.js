/**
 * @param {number} n
 * @return {number}
 */
var maxProduct = function(n) {
    let digit = String(n).split("").map(Number);
   let num = 0;
   for(let i = 0; i < digit.length; i++){
    for(j = i + 1; j < digit.length; j++){
        num = digit[i] * digit[j];
    }
   }
    
    return num;
};