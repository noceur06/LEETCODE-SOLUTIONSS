/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {

    let min = Math.min(...nums);
    let max = Math.max(...nums);

    function gcd(a,b){
        let limit = Math.min(a,b);
        for(let i = limit; i >= 1; i--){
            if(a % i === 0 && b % i === 0){
                return i;
            }
        }
    }

    return gcd(min,max)
};