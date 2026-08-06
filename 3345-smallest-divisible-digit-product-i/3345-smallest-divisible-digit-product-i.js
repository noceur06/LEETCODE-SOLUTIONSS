/**
 * @param {number} n
 * @param {number} t
 * @return {number}
 */
var smallestNumber = function(n, t) {
    
    while (true) {

        let digits = String(n).split("").map(Number);

        let product = 1;

        for (let digit of digits) {
            product *= digit;
        }

        if (product % t === 0) {
            return n;
        }

        n++;
    }
};