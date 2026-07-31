/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function(word) {
    let freq = {};

    for(let char of word){
        freq[char] = (freq[char] || 0) +1;
    }

    let arr = Object.values(freq).sort((a,b) => b - a);

    let push = 0;

    for(let i = 0; i < arr.length; i++){
        push += arr[i] * (Math.floor(i/8) + 1);
    }
    return push;
};