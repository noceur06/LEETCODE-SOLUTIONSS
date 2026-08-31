/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    s = s.trimStart();
   let sign = 1;
   let i = 0;
   if(s[i] === "-"){
    sign = -1;
    i++
   }else if(s[i] === "+"){
    sign = 1;
    i++
   }

   let num = 0;
   while(i <= s.length && s[i] >= "0" && s[i] <= "9"){
    num = num * 10 + Number(s[i]);
    i++
   }

   num *= sign;
   if (num > 2147483647) {
    return 2147483647;
}

if (num < -2147483648) {
    return -2147483648;
}
return num;

};