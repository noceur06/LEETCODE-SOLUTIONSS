/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function(low, high) {
    let result = [];
    let digits = "123456789";

    for(let i = String(low).length; i<= String(high).length; i++){
        for(let j = 0; j <= 9 - i; j++){
            let num =  Number(digits.substring(j, j + i));

            if(num >= low && num <= high){
                result.push(num)
            }
        }
    }

    return result;
    
};