/**
 * @param {number} n
 * @return {number}
 */
var countCommas = function(n) {
   let start =1000;
   let comma = 1;
   let count = 0;
   while(start <= n){
    let end = start * 1000 - 1;

    end = Math.min(end,n);

    let number = end - start + 1;
    count += number * comma;

    start *= 1000;
    comma++
   }
   return count
};