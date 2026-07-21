/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    for(let i = digits.length - 1; i >= 0; i--){
        if(digits[i] < 9){
            digits[i]++;
            return digits;
        }
        digits[i] = 0;
    }

    digits.unshift(1);
    return digits;

// not all test cases are passed expect the examples
    // let joining = digits.join("");
    // let plus = Number(joining) + 1;
    // let change = String(plus);
    // let split = change.split("");
    // return split.map(Number);
};