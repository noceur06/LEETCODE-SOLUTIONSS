/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    if(dividend === -2147483648 && divisor === -1){
        return 2147483647
    }
    let negative = (dividend < 0)!== (divisor < 0);

    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);
    let qoute = 0;
    while(dividend >= divisor){
        let temp = divisor;
        let multiple = 1;
        
        while(temp + temp <= dividend){
            temp += temp;
            multiple += multiple;
        }

        dividend -= temp;
        qoute += multiple;
    }

    if(negative){
        qoute = -qoute;
    }
    return qoute
};