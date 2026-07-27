/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {

    // simple and clear
    let arr = nums.sort((a,b) => b - a);
    let result = (arr[0] - 1) * (arr[1] -1);
    return result;

    // brute force solution with time complexity

    // let prod = 0;
    // for(let i = 0; i < nums.length; i++){
    //     for(let j = i + 1; j < nums.length; j++){
    //         let max = (nums[i] - 1) * (nums[j] -1);
    //         if(max > prod){
    //             prod = max;
    //         }
    //     }
    // }
    // return prod;
};