/**
 * @param {number} n
 * @return {number}
 */
var gcdOfOddEvenSums = function(n) {
    let sumOdd = n * n ;
    let sumEven = n * (n + 1);
    
    function gcd(a,b){
        while( b !== 0){
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a

    }

    return gcd(sumOdd, sumEven);
    
};