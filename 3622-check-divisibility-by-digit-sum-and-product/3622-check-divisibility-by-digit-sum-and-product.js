/**
 * @param {number} n
 * @return {boolean}
 */
var checkDivisibility = function(n) {
    let split = String(n).split("");
    
    let sum = 0;
    let multiply = 1;

    for(let i = 0; i < split.length; i++){
        sum += Number(split[i]);
        multiply *= Number(split[i]);
    }
    let result = sum + multiply;
    return n % result === 0;
};