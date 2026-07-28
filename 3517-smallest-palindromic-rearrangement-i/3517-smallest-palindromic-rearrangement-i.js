/**
 * @param {string} s
 * @return {string}
 */
var smallestPalindrome = function(s) {
    let obj = {}
    let left = "";
    let middle = "";
    for(let char of s){
        if(obj[char]){
            obj[char]++;
        }else{
            obj[char] = 1;
        }
    }

    let chars = Object.keys(obj).sort();

    for(let char of chars){
        
        let half = Math.floor(obj[char] / 2);
        left += char.repeat(half);

        if(obj[char] % 2 === 1){
            middle = char;
        }
    }
    let right = left.split("").reverse().join("");
    return left + middle + right;
    
};