/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var firstStableIndex = function(nums, k) {
   let prefixMax = new Array(nums.length);
   prefixMax[0] = nums[0];
   for(let i = 1; i < nums.length; i++){
    prefixMax[i] = Math.max(prefixMax[i -1], nums[i]);
   }
   let suffixMin = new Array(nums.length);
   suffixMin[nums.length - 1] = nums[nums.length - 1];
   for(let i = nums.length - 2; i >= 0; i--){
    suffixMin[i] = Math.min(suffixMin[i + 1], nums[i]);
   }

   for(let i = 0; i < nums.length; i++){
    
   let score = prefixMax[i] - suffixMin[i];
   if(score <= k){
    return i;
   }}
   return -1;
};