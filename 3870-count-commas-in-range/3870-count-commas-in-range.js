/**
 * @param {number} n
 * @return {number}
 */
var countCommas = function(n) {
    let count = 0;
    if(n > 999){
        count = n - 1000 + 1;
    }
    return count;
};