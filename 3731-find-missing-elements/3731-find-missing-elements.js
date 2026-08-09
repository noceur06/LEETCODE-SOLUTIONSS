/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function(nums) {
    let arr = nums.sort((a,b) => a - b);
    let arrF = arr[0];
    let arrL = arr[arr.length - 1];
    let final = [];

    for(let i = arrF; i <= arrL; i++){
        if(!arr.includes(i)){
            final.push(i);
        }
    }

    return final;
};