/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0;
    let result = "";

    while(i >= 0 || j >= 0 || carry > 0){
        let digitA = i >=0 ? Number(a[i]) : 0;
        let digitB = j >= 0? Number(b[j]) : 0;

        let sum = digitA + digitB + carry;
        let digit = sum % 2;

        carry = Math.floor(sum / 2);

        result += digit;
        i--;
        j--;

    }
    return result.split("").reverse().join("");
    
};